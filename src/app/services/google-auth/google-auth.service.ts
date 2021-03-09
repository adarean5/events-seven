import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from "rxjs";
import { User } from "@/app/models/user.model";
import firebase from "firebase/app";

@Injectable({
    providedIn: "root",
})
export class GoogleAuthService {
    constructor(private http: HttpClient, private fireAuth: AngularFireAuth) {}

    public getUserData(): Observable<User | null> {
        return this.fireAuth.authState;
    }

    public async signIn(): Promise<void> {
        const provider = new firebase.auth.GoogleAuthProvider();
        return this.fireAuth.signInWithRedirect(provider);
    }

    async signOut(): Promise<void> {
        await this.fireAuth.signOut();
    }
}
