import { TestBed } from "@angular/core/testing";

import { EventDefinitionsService } from "./event-definitions.service";

describe("EventDefinitionsService", () => {
    let service: EventDefinitionsService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(EventDefinitionsService);
    });

    it("should be created", () => {
        expect(service).toBeTruthy();
    });
});
