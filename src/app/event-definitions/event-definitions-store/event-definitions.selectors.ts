import { createFeatureSelector, createSelector } from "@ngrx/store";
import {
    EventDefinitionsState,
    featureName,
} from "@/app/event-definitions/event-definitions-store/event-definitions.state";
import { EventDefinition } from "@/app/event-definitions/models/event-definitions.model";

const selectEventDefinitionsFeature = createFeatureSelector<EventDefinitionsState>(
    featureName,
);

export const selectEventDefinitions = createSelector(
    selectEventDefinitionsFeature,
    (state: EventDefinitionsState) => state.eventDefinitions,
);

export const selectIsLoading = createSelector(
    selectEventDefinitionsFeature,
    (state: EventDefinitionsState) => state.isLoading,
);

export const selectError = createSelector(
    selectEventDefinitionsFeature,
    (state: EventDefinitionsState) => state.error,
);

export const selectSelectedEventDefinitionId = createSelector(
    selectEventDefinitionsFeature,
    (state: EventDefinitionsState) => state.selectedEventDefinitionId,
);

export const selectSelectedEventDefinition = createSelector(
    selectEventDefinitionsFeature,
    (state: EventDefinitionsState): EventDefinition | null => {
        if (!state.selectedEventDefinitionId || !state.eventDefinitions) {
            return null;
        }

        const selectedEventDefintion = state.eventDefinitions.find(
            (eventDefinition) =>
                eventDefinition.id === state.selectedEventDefinitionId,
        );

        return selectedEventDefintion || null;
    },
);
