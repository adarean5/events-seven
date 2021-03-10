import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserState } from "@/app/app-store/user-store/user.state";

const selectUserFeature = createFeatureSelector<UserState>("user");

export const selectUser = createSelector(
    selectUserFeature,
    (state: UserState) => state.user,
);

export const selectIsLoading = createSelector(
    selectUserFeature,
    (state: UserState) => state.isLoading,
);

export const selectError = createSelector(
    selectUserFeature,
    (state: UserState) => state.error,
);
