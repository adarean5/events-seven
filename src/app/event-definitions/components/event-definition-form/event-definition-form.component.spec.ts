import { ComponentFixture, TestBed } from "@angular/core/testing";

import { EventDefinitionFormComponent } from "./event-definition-form.component";

describe("EventDefinitionFormComponent", () => {
    let component: EventDefinitionFormComponent;
    let fixture: ComponentFixture<EventDefinitionFormComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [EventDefinitionFormComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(EventDefinitionFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
