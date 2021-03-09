import { createAction, props } from "@ngrx/store";
import { User } from "@/app/models/user.model";

const buildType = (actionName: string) => `[Auth] ${actionName}`;

export const getUser = createAction(buildType("Get user"));
export const authenticated = createAction(
    buildType("Authenticated"),
    props<{ user: User }>(),
);
export const notAuthenticated = createAction(buildType("Not authenticated"));

export const signIn = createAction(buildType("Sign in"));
export const signInSuccess = createAction(
    buildType("Sign in - Success"),
    props<{ user: User }>(),
);
export const signInError = createAction(
    buildType("Sign in - Error"),
    props<{ error: Error }>(),
);

export const signOut = createAction(buildType("Sign out"));
export const signOutSuccess = createAction(buildType("Sign out - success"));
export const signOutError = createAction(
    buildType("Sign out - error"),
    props<{ error: Error }>(),
);
