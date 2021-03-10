import { createAction, props } from "@ngrx/store";
import { User } from "@/app/models/user.model";

const buildType = (actionName: string) => `[Auth] ${actionName}`;

export const signIn = createAction(buildType("Sign in"));

export const signInSuccess = createAction(
    buildType("Sign in - Success"),
    props<{ user: User }>(),
);

export const signInError = createAction(
    buildType("Sign in - Error"),
    props<{ error: Error }>(),
);
