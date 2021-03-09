import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SignInComponent } from "@auth/pages/sign-in/sign-in.component";

const routes: Routes = [
    {
        path: "sign-in",
        component: SignInComponent,
    },
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AuthRoutingModule {}
