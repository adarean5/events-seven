import { createFeatureSelector, createSelector } from "@ngrx/store";
import {
    EventDefinitionsState,
    featureName,
} from "@/app/event-definitions/event-definitions-store/event-definitions.state";

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
