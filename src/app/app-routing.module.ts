import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    {
        path: "login",
        loadChildren: () =>
            import("./auth/auth.module").then((m) => m.AuthModule),
    },
    {
        path: "event-manager",
        loadChildren: () =>
            import("./event-manager/event-manager.module").then(
                (m) => m.EventManagerModule,
            ),
    },
    {
        path: "**",
        redirectTo: "/login",
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
