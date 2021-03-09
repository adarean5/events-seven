import { RouterReducerState } from "@ngrx/router-store";

export interface AppState {
    router?: RouterReducerState;
}

const initialAppState: AppState = {};

export function getInitialAppState(): AppState {
    return initialAppState;
}
