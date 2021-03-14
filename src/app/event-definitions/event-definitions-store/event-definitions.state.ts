import { EventDefinition } from "@/app/event-definitions/models/event-definitions.model";

export const featureName = "event-definitions";

export interface EventDefinitionsState {
    eventDefinitions: EventDefinition[];
    isLoading: boolean;
    error: Error | null;
}

const initialEventDefinitionsState: EventDefinitionsState = {
    eventDefinitions: [],
    isLoading: false,
    error: null,
};

export function getInitialEventDefinitionsState(): EventDefinitionsState {
    return initialEventDefinitionsState;
}
