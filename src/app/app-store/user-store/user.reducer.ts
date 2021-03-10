import { createReducer, on } from "@ngrx/store";
import { getInitialUserState } from "@/app/app-store/user-store/user.state";
import * as UserActions from "./user.actions";

export const userReducer = createReducer(
    getInitialUserState(),

    on(UserActions.getUser, (state) => ({
        ...state,
        user: null,
        isLoading: true,
    })),

    on(UserActions.authenticated, (state, { user }) => ({
        ...state,
        user,
        isLoading: false,
    })),

    on(UserActions.notAuthenticated, (state) => ({
        ...state,
        isLoading: false,
    })),

    on(UserActions.signOut, (state) => ({
        ...state,
        isLoading: true,
    })),

    on(UserActions.signOutSuccess, (state) => ({
        ...state,
        user: null,
        isLoading: false,
    })),

    on(UserActions.signOutError, (state) => ({
        ...state,
        isLoading: false,
    })),
);
