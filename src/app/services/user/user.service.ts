import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from "rxjs";
import { User } from "@/app/models/user.model";

@Injectable({
    providedIn: "root",
})
export class UserService {
    constructor(private fireAuth: AngularFireAuth) {}

    public getUserData(): Observable<User | null> {
        return this.fireAuth.authState;
    }

    async signOut(): Promise<void> {
        await this.fireAuth.signOut();
    }
}
