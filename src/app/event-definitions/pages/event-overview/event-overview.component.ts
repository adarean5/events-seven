import { Component, OnInit } from "@angular/core";
import { Event, EventTypes } from "@/app/event-definitions/models/event.model";
import { Observable, of } from "rxjs";

@Component({
    selector: "app-event-overview",
    templateUrl: "./event-overview.component.html",
    styleUrls: ["./event-overview.component.scss"],
})
export class EventOverviewComponent implements OnInit {
    events!: Observable<Array<Event>>;
    columnDefs = [
        { def: "name", headerText: "Name", sortable: true },
        { def: "type", headerText: "Type" },
        { def: "priority", headerText: "Priority", sortable: true },
    ];

    constructor() {}

    ngOnInit(): void {
        this.events = this.getEventsMock();
    }

    getEventsMock(): Observable<Array<Event>> {
        return of([
            {
                id: "test-id-0",
                name: "click-event",
                description:
                    "when the user clicks the button the event should be triggered",
                type: EventTypes.App,
                priority: 2,
                relatedEvents: [],
                createdById: "1",
            },
            {
                id: "test-id-1",
                name: "show-button-event",
                description:
                    "when the user clicks the button it should be shown",
                type: EventTypes.CrossPromo,
                priority: 10,
                relatedEvents: [],
                createdById: "2",
            },
            {
                id: "test-id-2",
                name: "redirect-event",
                description:
                    "the user will be redirected when accessing an invalid url",
                type: EventTypes.CrossPromo,
                priority: 4,
                relatedEvents: [],
                createdById: "1",
            },
            {
                id: "test-id-2",
                name: "redirect-event",
                description:
                    "the user will be redirected when accessing an invalid url",
                type: EventTypes.CrossPromo,
                priority: 4,
                relatedEvents: [],
                createdById: "1",
            },
            {
                id: "test-id-3",
                name: "redirect-event",
                description:
                    "the user will be redirected when accessing an invalid url",
                type: EventTypes.CrossPromo,
                priority: 1,
                relatedEvents: [],
                createdById: "1",
            },
            {
                id: "test-id-4",
                name: "redirect-event",
                description:
                    "the user will be redirected when accessing an invalid url",
                type: EventTypes.Ads,
                priority: 4,
                relatedEvents: [],
                createdById: "3",
            },
            {
                id: "test-id-5",
                name: "redirect-event",
                description:
                    "the user will be redirected when accessing an invalid url",
                type: EventTypes.LiveOps,
                priority: 6,
                relatedEvents: [],
                createdById: "2",
            },
        ]);
    }
}
