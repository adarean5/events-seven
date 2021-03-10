import { Component, OnInit } from "@angular/core";
import { AuthState } from "@/app/app-store/auth-store/auth.state";
import { Store } from "@ngrx/store";
import { signIn } from "@/app/app-store/auth-store/auth.actions";
import { getUser, signOut } from "@/app/app-store/user-store/user.actions";

@Component({
    selector: "app-sign-in",
    templateUrl: "./sign-in.component.html",
    styleUrls: ["./sign-in.component.scss"],
})
export class SignInComponent implements OnInit {
    constructor(private store: Store<AuthState>) {}

    ngOnInit(): void {}

    signInWithGoogle(): void {
        this.store.dispatch(signIn());
    }

    signOutDebug(): void {
        this.store.dispatch(signOut());
    }

    getUserDebug(): void {
        this.store.dispatch(getUser());
    }
}
