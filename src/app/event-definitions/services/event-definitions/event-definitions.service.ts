import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import {
    EventDefinition,
    EventTypes,
} from "@/app/event-definitions/models/event-definitions.model";
import { EventDefinitionsServicesModule } from "@/app/event-definitions/services/event-definitions-services.module";

@Injectable({
    providedIn: EventDefinitionsServicesModule,
})
export class EventDefinitionsService {
    constructor() {}

    getEventDefinitions(): Observable<EventDefinition[]> {
        return of(this.getEventsMock());
    }

    private getEventsMock(): Array<EventDefinition> {
        return [
            {
                id: "test-id-0",
                name: "click-event",
                description:
                    "when the user clicks the button the event should be triggered",
                type: EventTypes.App,
                priority: 2,
                relatedEvents: [],
                createdById: "1",
                dateCreated: "22.1.2021",
                dateUpdated: "23.1.2021",
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
                dateCreated: "22.1.2021",
                dateUpdated: "23.1.2021",
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
                dateCreated: "22.1.2021",
                dateUpdated: "23.1.2021",
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
                dateCreated: "22.1.2021",
                dateUpdated: "23.1.2021",
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
                dateCreated: "22.1.2021",
                dateUpdated: "23.1.2021",
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
                dateCreated: "22.1.2021",
                dateUpdated: "23.1.2021",
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
                dateCreated: "22.1.2021",
                dateUpdated: "23.1.2021",
            },
        ];
    }
}
