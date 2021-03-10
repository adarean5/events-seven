import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "@/app/app-store/auth-store/auth.state";

const selectAuth = createFeatureSelector<AuthState>("auth");

export const selectIsLoading = createSelector(
    selectAuth,
    (state: AuthState) => state.isLoading,
);

export const selectError = createSelector(
    selectAuth,
    (state: AuthState) => state.error,
);
