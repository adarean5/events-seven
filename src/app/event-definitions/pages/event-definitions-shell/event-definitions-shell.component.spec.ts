import { ComponentFixture, TestBed } from "@angular/core/testing";

import { EventDefinitionsShellComponent } from "./event-definitions-shell.component";

describe("EventDefinitionsShellComponent", () => {
    let component: EventDefinitionsShellComponent;
    let fixture: ComponentFixture<EventDefinitionsShellComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [EventDefinitionsShellComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(EventDefinitionsShellComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
