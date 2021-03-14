import { Component, OnInit } from "@angular/core";
import { EventDefinition } from "@/app/event-definitions/models/event-definitions.model";
import { Store } from "@ngrx/store";
import { EventDefinitionsState } from "@/app/event-definitions/event-definitions-store/event-definitions.state";
import { createEventDefinition } from "@/app/event-definitions/event-definitions-store/event-definitions.actions";

@Component({
    selector: "app-create-event-definition",
    templateUrl: "./create-event-definition.component.html",
    styleUrls: ["./create-event-definition.component.scss"],
})
export class CreateEventDefinitionComponent implements OnInit {
    constructor(private store: Store<EventDefinitionsState>) {}

    ngOnInit(): void {}

    submitForm(eventDefinition: EventDefinition): void {
        console.log("Create new definition", eventDefinition);
        this.store.dispatch(createEventDefinition({ eventDefinition }));
    }
}
