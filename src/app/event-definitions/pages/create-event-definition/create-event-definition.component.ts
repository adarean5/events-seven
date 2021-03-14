import { Component, OnInit } from "@angular/core";
import { EventDefinition } from "@/app/event-definitions/models/event-definitions.model";

@Component({
    selector: "app-create-event-definition",
    templateUrl: "./create-event-definition.component.html",
    styleUrls: ["./create-event-definition.component.scss"],
})
export class CreateEventDefinitionComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}

    submitForm(eventDefinition: EventDefinition): void {
        console.log("Submit new event definition", eventDefinition);
    }
}
