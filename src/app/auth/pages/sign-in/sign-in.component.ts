import { Component, OnInit } from "@angular/core";
import { AuthState } from "@/app/app-store/auth-store/auth.state";
import { Store } from "@ngrx/store";
import { getUser, signIn } from "@/app/app-store/auth-store/auth.actions";
import { GoogleAuthService } from "@/app/services/google-auth/google-auth.service";

@Component({
    selector: "app-sign-in",
    templateUrl: "./sign-in.component.html",
    styleUrls: ["./sign-in.component.scss"],
})
export class SignInComponent implements OnInit {
    constructor(
        private store: Store<AuthState>,
        private googleAuthService: GoogleAuthService,
    ) {}

    ngOnInit(): void {}

    signInWithGoogle(): void {
        this.store.dispatch(signIn());
    }

    signOutDebug(): void {
        this.googleAuthService.signOut();
    }

    getUserDebug(): void {
        this.store.dispatch(getUser());
    }
}
