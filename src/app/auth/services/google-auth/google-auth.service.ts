import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
    providedIn: "root",
})
export class GoogleAuthService {
    constructor(private router: Router) {}

    public signIn(): void {
        // TODO: Add firebase authentication
        console.log("Clicked sign in");
        this.router.navigate(["/event-manager"]);
    }
}
