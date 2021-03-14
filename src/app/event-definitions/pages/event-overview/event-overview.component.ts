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

@Component({
    selector: "app-event-overview",
    templateUrl: "./event-overview.component.html",
    styleUrls: ["./event-overview.component.scss"],
})
export class EventOverviewComponent implements OnInit, OnDestroy {
    subscription = new Subscription();
    eventDefinitions!: Observable<Array<EventDefinition>>;
    columnDefs = [
        { def: "name", headerText: "Name", sortable: true },
        { def: "type", headerText: "Type" },
        { def: "priority", headerText: "Priority", sortable: true },
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

    constructor(private store: Store<EventDefinitionsState>) {}

    ngOnInit(): void {
        this.eventDefinitions = this.store.select(selectEventDefinitions);
        this.selectedEventId = this.store.select(
            selectSelectedEventDefinitionId,
        );
        this.selectedEventDefinition = this.store.select(
            selectSelectedEventDefinition,
        );
        this.subscription.add(
            this.selectedEventDefinition.subscribe((eventDefinition) => {
                if (eventDefinition) {
                    this.setFormValues(eventDefinition);
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
        this.store.dispatch(setSelectedEventDefinitionId({ id: eventId }));
    }

    getEventIdFromGrid(): (event: EventDefinition) => string {
        return (event: EventDefinition) => event.id;
    }

    onSubmitEventForm(): void {
        console.log("Form submitted", this.eventForm.value);
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
