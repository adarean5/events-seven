import * as AuthActions from "./auth.actions";
import {
    AuthState,
    getInitialAuthState,
} from "@/app/app-store/auth-store/auth.state";
import { Action, createReducer, on } from "@ngrx/store";

export const authReducer = createReducer(
    getInitialAuthState(),

    on(AuthActions.getUser, (state) => ({
        ...state,
        user: null,
        isLoading: true,
    })),
    on(AuthActions.authenticated, (state, { user }) => ({
        ...state,
        user,
        isLoading: false,
    })),
    on(AuthActions.notAuthenticated, (state) => ({
        ...state,
        isLoading: false,
    })),

    on(AuthActions.signIn, (state: AuthState) => ({
        ...state,
        isLoading: true,
    })),
    on(AuthActions.signInSuccess, (state: AuthState, { user }) => ({
        ...state,
        user,
        isLoading: false,
    })),
    on(AuthActions.signInError, (state: AuthState) => ({
        ...state,
        isLoading: false,
    })),
);

export function getAuthReducer(
    authState: AuthState,
    authAction: Action,
): AuthState {
    return authReducer(authState, authAction);
}
