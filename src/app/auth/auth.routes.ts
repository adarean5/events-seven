import { Routes } from "@angular/router";
import { SignInComponent } from "@/app/auth/pages/sign-in/sign-in.component";

const ROUTES: Routes = [
    {
        path: "",
        component: SignInComponent,
    },
];

export function routes(): Routes {
    return ROUTES;
}
