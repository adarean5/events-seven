import { Component, OnInit } from "@angular/core";
import {
    EventDefinition,
    EventTypes,
} from "@/app/event-definitions/models/event-definitions.model";
import { Observable, Subject } from "rxjs";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { EventDefinitionsState } from "@/app/event-definitions/event-definitions-store/event-definitions.state";
import { selectEventDefinitions } from "@/app/event-definitions/event-definitions-store/event-definitions.selectors";

@Component({
    selector: "app-event-overview",
    templateUrl: "./event-overview.component.html",
    styleUrls: ["./event-overview.component.scss"],
})
export class EventOverviewComponent implements OnInit {
    events!: Observable<Array<EventDefinition>>;
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
    selectedEventId: Subject<string | null> = new Subject();
    selectedEvent: EventDefinition | null = null;

    constructor(private store: Store<EventDefinitionsState>) {}

    ngOnInit(): void {
        this.events = this.store.select(selectEventDefinitions);
    }

    onSubmitEventForm(): void {
        console.log("Form submitted", this.eventForm.value);
    }

    getEventId(): (event: EventDefinition) => string {
        return (event: EventDefinition) => event.id;
    }

    setSelectedEventId(eventId: string): void {
        console.log("Event id", eventId);
        this.selectedEventId.next(eventId);
    }

    getSelectedEvent(eventId: string): void /*Observable<Event>*/ {
        console.log(eventId);
        // this.events.pipe(
        //     take(1),
        //     map(
        //         (events) =>
        //             events.find((event) => event.id === eventId) as Event,
        //     ),
        // ).subscribe((event) =>);
    }
}
