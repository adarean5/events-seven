import { Component, OnDestroy, OnInit } from "@angular/core";
import { EventDefinition } from "@/app/event-definitions/models/event-definitions.model";
import { Observable, Subscription } from "rxjs";
import { Store } from "@ngrx/store";
import { EventDefinitionsState } from "@/app/event-definitions/event-definitions-store/event-definitions.state";
import {
    selectEventDefinitions,
    selectSelectedEventDefinition,
} from "@/app/event-definitions/event-definitions-store/event-definitions.selectors";
import {
    deleteEventDefinition,
    setSelectedEventDefinitionId,
    updateEventDefinition,
} from "@/app/event-definitions/event-definitions-store/event-definitions.actions";
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
        this.selectedEventDefinition = this.eventDefinitionStore.select(
            selectSelectedEventDefinition,
        );
        this.subscription.add(
            this.selectedEventDefinition.subscribe((eventDefinition) => {
                if (eventDefinition) {
                    // this.setFormValues(eventDefinition);
                    this.selectedEventDefinitionValue = eventDefinition;
                }
            }),
        );
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

    onSubmitEventForm(eventDefinition: EventDefinition): void {
        if (this.selectedEventDefinitionValue) {
            const test = {
                ...this.selectedEventDefinitionValue,
                ...eventDefinition,
            };
            this.eventDefinitionStore.dispatch(
                updateEventDefinition({ eventDefinition: test }),
            );
            this.isEditMode = false;
        }
    }

    deleteEventDefinition(): void {
        if (this.selectedEventDefinitionValue) {
            this.eventDefinitionStore.dispatch(
                deleteEventDefinition({
                    id: this.selectedEventDefinitionValue.id,
                }),
            );
        }
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

    canEdit(userId: string): boolean {
        return userId === this.selectedEventDefinitionValue?.createdById;
    }

    canDelete(userId: string): boolean {
        return userId === this.selectedEventDefinitionValue?.createdById;
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
