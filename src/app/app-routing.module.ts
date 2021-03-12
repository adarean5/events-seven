import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { Routes } from "@angular/router";
import { IsAuthenticatedGuard } from "@/app/guards/is-authenticated/is-authenticated.guard";
import { IsNotAuthenticatedGuard } from "@/app/guards/is-not-authenticated/is-not-authenticated.guard";

const routes: Routes = [
    {
        path: "auth",
        canActivate: [IsNotAuthenticatedGuard],
        canLoad: [IsNotAuthenticatedGuard],
        loadChildren: () =>
            import("@auth/auth.module").then((m) => m.AuthModule),
    },
    {
        path: "",
        canActivate: [IsAuthenticatedGuard],
        canLoad: [IsAuthenticatedGuard],
        loadChildren: () =>
            import("@/app/shell/shell.module").then((m) => m.ShellModule),
    },
    {
        path: "**",
        redirectTo: "/auth/sign-in",
        // TODO Define the generic 404 component
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
