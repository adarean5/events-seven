import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as AuthActions from "@auth/auth-store/auth.actions";
import { catchError, exhaustMap } from "rxjs/operators";
import { GoogleAuthService } from "@auth/services/google-auth/google-auth.service";
import { fromPromise } from "rxjs/internal-compatibility";
import { of } from "rxjs";

@Injectable()
export class AuthEffects {
    constructor(
        private actions$: Actions,
        private googleAuthService: GoogleAuthService,
    ) {}

    signIn = createEffect(
        () =>
            this.actions$.pipe(
                ofType(AuthActions.signIn),
                exhaustMap(() => fromPromise(this.googleAuthService.signIn())),
                catchError((error) => of(AuthActions.signInError(error))),
            ),
        { dispatch: false },
    );
}
