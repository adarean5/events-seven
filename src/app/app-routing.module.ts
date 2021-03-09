import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { Routes } from "@angular/router";

const routes: Routes = [
    {
        path: "auth",
        loadChildren: () =>
            import("@auth/auth.module").then((m) => m.AuthModule),
        // TODO Add route guard
    },
    {
        path: "",
        loadChildren: () =>
            import("@/app/shell/shell.module").then((m) => m.ShellModule),
        // TODO Add route guard
    },
    {
        path: "**",
        redirectTo: "/not-found",
        // TODO Define the generic 404 component
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
