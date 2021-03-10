import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import firebase from "firebase/app";
import { AuthServicesModule } from "@auth/services/auth-services.module";

@Injectable({
    providedIn: AuthServicesModule,
})
export class GoogleAuthService {
    constructor(private fireAuth: AngularFireAuth) {}

    public async signIn(): Promise<void> {
        const provider = new firebase.auth.GoogleAuthProvider();
        return this.fireAuth.signInWithRedirect(provider);
    }
}
