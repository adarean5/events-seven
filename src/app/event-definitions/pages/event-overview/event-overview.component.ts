import { Component, OnDestroy, OnInit } from "@angular/core";
import {
    EventDefinition,
    EventTypes,
} from "@/app/event-definitions/models/event-definitions.model";
import { Observable, Subscription } from "rxjs";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { EventDefinitionsState } from "@/app/event-definitions/event-definitions-store/event-definitions.state";
import {
    selectEventDefinitions,
    selectSelectedEventDefinition,
    selectSelectedEventDefinitionId,
} from "@/app/event-definitions/event-definitions-store/event-definitions.selectors";
import { setSelectedEventDefinitionId } from "@/app/event-definitions/event-definitions-store/event-definitions.actions";
import { User } from "@/app/models/user.model";
import { UserState } from "@/app/app-store/user-store/user.state";
import { selectUser } from "@/app/app-store/user-store/user.selectors";

@Component({
    selector: "app-event-overview",
    templateUrl: "./event-overview.component.html",
    styleUrls: ["./event-overview.component.scss"],
})
export class EventOverviewComponent implements OnInit, OnDestroy {
    subscription = new Subscription();
    isEditMode = false;
    eventTest = [
        {
            key: "Yolo",
            value: "YES",
        },
    ];
    eventDefinitions!: Observable<Array<EventDefinition>>;
    overviewColumnDefs = [
        { def: "name", headerText: "Name", sortable: true },
        { def: "type", headerText: "Type" },
        { def: "priority", headerText: "Priority", sortable: true },
    ];
    detailsColumnView = [
        { def: "key", headerText: "Property" },
        { def: "value", headerText: "Value" },
    ];
    eventForm = new FormGroup({
        name: new FormControl("", [Validators.required]),
        description: new FormControl("", [Validators.required]),
        type: new FormControl("", [Validators.required]),
        priority: new FormControl(0, [
            Validators.required,
            Validators.min(0),
            Validators.max(10),
        ]),
    });
    readonly eventTypes = Object.values(EventTypes);
    selectedEventId!: Observable<string | null>;
    selectedEventDefinition!: Observable<EventDefinition | null>;
    selectedEventDefinitionValue: EventDefinition | null = null;
    user!: Observable<User>;

    constructor(
        private eventDefinitionStore: Store<EventDefinitionsState>,
        private userStore: Store<UserState>,
    ) {}

    ngOnInit(): void {
        this.user = this.userStore.select(selectUser) as Observable<User>;
        this.eventDefinitions = this.eventDefinitionStore.select(
            selectEventDefinitions,
        );
        this.selectedEventId = this.eventDefinitionStore.select(
            selectSelectedEventDefinitionId,
        );
        this.selectedEventDefinition = this.eventDefinitionStore.select(
            selectSelectedEventDefinition,
        );
        this.subscription.add(
            this.selectedEventDefinition.subscribe((eventDefinition) => {
                if (eventDefinition) {
                    this.setFormValues(eventDefinition);
                    this.selectedEventDefinitionValue = eventDefinition;
                }
            }),
        );
    }

    setFormValues(eventDefinition: EventDefinition): void {
        this.eventForm.patchValue({
            name: eventDefinition.name,
            description: eventDefinition.description,
            type: eventDefinition.type,
            priority: eventDefinition.priority,
        });
    }

    setSelectedEventId(eventId: string): void {
        this.isEditMode = false;
        this.eventDefinitionStore.dispatch(
            setSelectedEventDefinitionId({ id: eventId }),
        );
    }

    getEventIdFromGrid(): (event: EventDefinition) => string {
        return (event: EventDefinition) => event.id;
    }

    onSubmitEventForm(): void {
        console.log("Form submitted", this.eventForm.value);
    }

    createReadOnlyRowData(eventDefinition: EventDefinition): Array<any> {
        return Object.keys(eventDefinition)
            .sort()
            .map((key: string) => {
                return {
                    key,
                    value: eventDefinition[key as keyof EventDefinition],
                };
            });
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
