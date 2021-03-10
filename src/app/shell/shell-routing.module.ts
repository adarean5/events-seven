import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ShellComponent } from "@/app/shell/pages/shell/shell.component";

const routes: Routes = [
    {
        path: "",
        component: ShellComponent,
        children: [
            {
                path: "event-definitions",
                loadChildren: () =>
                    import(
                        "@/app/event-definitions/event-definitions.module"
                    ).then((m) => m.EventDefinitionsModule),
            },
        ],
    },
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ShellRoutingModule {}
