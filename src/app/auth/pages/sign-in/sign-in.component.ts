import { Component, OnInit } from "@angular/core";
import { GoogleAuthService } from "@auth/services/google-auth/google-auth.service";

@Component({
    selector: "app-sign-in",
    templateUrl: "./sign-in.component.html",
    styleUrls: ["./sign-in.component.scss"],
})
export class SignInComponent implements OnInit {
    constructor(private googleAuthService: GoogleAuthService) {}

    ngOnInit(): void {}

    signIn(): void {
        this.googleAuthService.signIn();
    }
}
