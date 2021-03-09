import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    {
        path: "event-definitions",
        // TODO Make a shell component with a side bar and a header and load children within
        loadChildren: () =>
            import("@/app/event-definitions/event-definitions.module").then(
                (m) => m.EventDefinitionsModule,
            ),
    },
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ShellRoutingModule {}
