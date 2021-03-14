import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import {
    EventDefinition,
    EventTypes,
} from "@/app/event-definitions/models/event-definitions.model";

@Component({
    selector: "app-event-definition-form",
    templateUrl: "./event-definition-form.component.html",
    styleUrls: ["./event-definition-form.component.scss"],
})
export class EventDefinitionFormComponent implements OnInit {
    readonly eventTypes = Object.values(EventTypes);
    form = new FormGroup({
        name: new FormControl("", [Validators.required]),
        description: new FormControl("", [Validators.required]),
        type: new FormControl("", [Validators.required]),
        priority: new FormControl(0, [
            Validators.required,
            Validators.min(0),
            Validators.max(10),
        ]),
    });

    @Input() set eventDefinition(newDefinition: EventDefinition) {
        this.setFormValues(newDefinition);
    }

    @Output() submitDefinitions = new EventEmitter<EventDefinition>();

    constructor() {}

    ngOnInit(): void {}

    setFormValues(eventDefinition: EventDefinition): void {
        this.form.patchValue({
            name: eventDefinition.name,
            description: eventDefinition.description,
            type: eventDefinition.type,
            priority: eventDefinition.priority,
        });
    }

    onSubmit(): void {
        // TODO Send the request to API
        console.log("Form submitted", this.form.value);
        this.submitDefinitions.emit(this.form.value);
    }
}
