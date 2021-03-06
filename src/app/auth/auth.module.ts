import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatRippleModule } from "@angular/material/core";

import { SignInComponent } from "@auth/pages/sign-in/sign-in.component";
import { routes } from "@auth/auth.routes";

@NgModule({
    declarations: [SignInComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes()),
        MatInputModule,
        MatButtonModule,
        MatRippleModule,
    ],
})
export class AuthModule {}
