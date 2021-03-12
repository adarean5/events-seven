import { Injectable } from "@angular/core";
import { UserService } from "@/app/services/user/user.service";
import { Actions, createEffect, ofType, OnInitEffects } from "@ngrx/effects";
import { Router } from "@angular/router";
import * as UserActions from "./user.actions";
import { catchError, exhaustMap, map, tap } from "rxjs/operators";
import { User } from "@/app/models/user.model";
import { Action, createAction } from "@ngrx/store";
import { buildType } from "./user.actions";
import { of } from "rxjs";

@Injectable()
export class UserEffects implements OnInitEffects {
    constructor(
        private actions$: Actions,
        private router: Router,
        private userService: UserService,
    ) {}

    userEffectsInit = createAction(buildType("Effects init"));

    init = createEffect(() =>
        this.actions$.pipe(
            ofType(this.userEffectsInit),
            map(() => UserActions.getUser()),
        ),
    );

    getUser = createEffect(() =>
        this.actions$.pipe(
            ofType(UserActions.getUser),
            exhaustMap(() => this.userService.getUserData()),
            map((userData: any | null) => {
                if (!userData) {
                    return UserActions.notAuthenticated();
                }

                const user: User = {
                    uid: userData.uid,
                    email: userData.email,
                    photoURL: userData.photoURL,
                    displayName: userData.displayName,
                };

                return UserActions.authenticated({ user });
            }),
        ),
    );

    authenticated = createEffect(
        () =>
            this.actions$.pipe(
                ofType(UserActions.authenticated),
                tap(() => {
                    this.router.navigate(["event-definitions"]);
                }),
            ),
        { dispatch: false },
    );

    notAuthenticated = createEffect(
        () =>
            this.actions$.pipe(
                ofType(UserActions.notAuthenticated),
                tap(() => this.router.navigate(["auth/sign-in"])),
            ),
        { dispatch: false },
    );

    signOut = createEffect(() =>
        this.actions$.pipe(
            ofType(UserActions.signOut),
            exhaustMap(() => this.userService.signOut()),
            map(() => UserActions.signOutSuccess()),
            catchError((error: Error) =>
                of(UserActions.signOutError({ error })),
            ),
        ),
    );

    ngrxOnInitEffects(): Action {
        return this.userEffectsInit();
    }
}
