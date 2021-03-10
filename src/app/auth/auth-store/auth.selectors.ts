import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "@auth/auth-store/auth.state";

const selectAuth = createFeatureSelector<AuthState>("auth");

export const selectIsLoading = createSelector(
    selectAuth,
    (state: AuthState) => state.isLoading,
);

export const selectError = createSelector(
    selectAuth,
    (state: AuthState) => state.error,
);
