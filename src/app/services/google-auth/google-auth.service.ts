import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import firebase from "firebase/app";

@Injectable({
    providedIn: "root",
})
export class GoogleAuthService {
    constructor(private fireAuth: AngularFireAuth) {}

    public async signIn(): Promise<void> {
        const provider = new firebase.auth.GoogleAuthProvider();
        return this.fireAuth.signInWithRedirect(provider);
    }
}
