import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from "rxjs";
import { User } from "@auth/models/user.model";

@Injectable({
    providedIn: "root",
})
export class GoogleAuthService {
    constructor(
        private router: Router,
        private http: HttpClient,
        private fireAuth: AngularFireAuth,
    ) {}

    public getUserData(): Observable<User | null> {
        return this.fireAuth.authState;
    }

    public signIn(): void {
        // TODO: Add firebase authentication
        console.log("Clicked sign in");
        this.router.navigate(["/event-manager"]);
    }
}
