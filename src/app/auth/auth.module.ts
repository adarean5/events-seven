import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatRippleModule } from "@angular/material/core";
import { HttpClientModule } from "@angular/common/http";

import { SignInComponent } from "@auth/pages/sign-in/sign-in.component";
import { AuthRoutingModule } from "./auth-routing.module";

@NgModule({
    declarations: [SignInComponent],
    imports: [
        CommonModule,
        MatInputModule,
        MatButtonModule,
        MatRippleModule,
        HttpClientModule,
        AuthRoutingModule,
    ],
    exports: [],
})
export class AuthModule {}
