import { createReducer, on } from "@ngrx/store";
import { getInitialEventDefinitionsState } from "@/app/event-definitions/event-definitions-store/event-definitions.state";
import * as EventDefinitionActions from "./event-definitions.actions";

export const eventDefinitionsReducer = createReducer(
    getInitialEventDefinitionsState(),

    on(EventDefinitionActions.getEventDefinitions, (state) => ({
        ...state,
        eventDefinitions: getInitialEventDefinitionsState().eventDefinitions,
        isLoading: true,
    })),

    on(
        EventDefinitionActions.getEventDefinitionsSuccess,
        (state, { eventDefinitions }) => ({
            ...state,
            eventDefinitions,
            isLoading: false,
        }),
    ),

    on(EventDefinitionActions.getEventDefinitionsError, (state, { error }) => ({
        ...state,
        isLoading: false,
        error,
    })),
);
