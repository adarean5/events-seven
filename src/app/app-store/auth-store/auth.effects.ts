import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType, OnInitEffects } from "@ngrx/effects";
import * as AuthActions from "@/app/app-store/auth-store/auth.actions";
import { catchError, exhaustMap, map, tap } from "rxjs/operators";
import { GoogleAuthService } from "@/app/services/google-auth/google-auth.service";
import { User } from "@/app/models/user.model";
import { Router } from "@angular/router";
import { fromPromise } from "rxjs/internal-compatibility";
import { of } from "rxjs";
import { Action } from "@ngrx/store";

@Injectable()
export class AuthEffects implements OnInitEffects {
    constructor(
        private actions$: Actions,
        private router: Router,
        private googleAuthService: GoogleAuthService,
    ) {}

    getUser = createEffect(() => {
        return this.actions$.pipe(
            ofType(AuthActions.getUser),
            exhaustMap(() => this.googleAuthService.getUserData()),
            map((userData: any | null) => {
                if (!userData) {
                    return AuthActions.notAuthenticated();
                }

                const user: User = {
                    uid: userData.uid,
                    email: userData.email,
                    photoURL: userData.photoURL,
                    displayName: userData.displayName,
                };

                return AuthActions.authenticated({ user });
            }),
        );
    });

    authenticated = createEffect(
        () =>
            this.actions$.pipe(
                ofType(AuthActions.authenticated),
                tap(() => this.router.navigate(["events-manager"])),
            ),
        { dispatch: false },
    );

    notAuthenticated = createEffect(
        () =>
            this.actions$.pipe(
                ofType(AuthActions.authenticated),
                tap(() => this.router.navigate(["auth/sign-in"])),
            ),
        { dispatch: false },
    );

    signIn = createEffect(() =>
        this.actions$.pipe(
            ofType(AuthActions.signIn),
            exhaustMap(() => fromPromise(this.googleAuthService.signIn())),
            map(() => AuthActions.getUser()),
            catchError((error) => of(AuthActions.signInError(error))),
        ),
    );

    ngrxOnInitEffects(): Action {
        return AuthActions.getUser();
    }
}
