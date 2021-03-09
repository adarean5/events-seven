import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "@/app/app-store/auth-store/auth.state";

export const selectAuth = createFeatureSelector<AuthState>("auth");

export const selectUser = createSelector(
    selectAuth,
    (state: AuthState) => state.user,
);

export const selectIsLoading = createSelector(
    selectAuth,
    (state: AuthState) => state.isLoading,
);
