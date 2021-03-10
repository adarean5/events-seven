import { createAction, props } from "@ngrx/store";
import { User } from "@/app/models/user.model";

export const buildType = (actionName: string) => `[User] ${actionName}`;

export const getUser = createAction(buildType("Get user"));

export const authenticated = createAction(
    buildType("Authenticated"),
    props<{ user: User }>(),
);

export const notAuthenticated = createAction(buildType("Not authenticated"));

export const signOut = createAction(buildType("Sign out"));

export const signOutSuccess = createAction(buildType("Sign out - success"));

export const signOutError = createAction(
    buildType("Sign out - error"),
    props<{ error: Error }>(),
);
