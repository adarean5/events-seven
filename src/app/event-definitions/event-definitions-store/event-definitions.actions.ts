import { createAction, props } from "@ngrx/store";
import { EventDefinition } from "@/app/event-definitions/models/event-definitions.model";
import { featureName } from "@/app/event-definitions/event-definitions-store/event-definitions.state";

export const buildType = (actionName: string) =>
    `[${featureName}] ${actionName}`;

export const getEventDefinitions = createAction(
    buildType("Get event definitions"),
);

export const getEventDefinitionsSuccess = createAction(
    buildType("Get event definitions success"),
    props<{ eventDefinitions: EventDefinition[] }>(),
);

export const getEventDefinitionsError = createAction(
    buildType("Get event definitions error"),
    props<{ error: Error }>(),
);

export const setSelectedEventDefinitionId = createAction(
    buildType("Set selectedEventDefinitionId"),
    props<{ id: string }>(),
);
