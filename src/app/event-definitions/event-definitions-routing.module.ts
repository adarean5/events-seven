import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EventOverviewComponent } from "@/app/event-definitions/pages/event-overview/event-overview.component";
import { EventDefinitionsShellComponent } from "@/app/event-definitions/pages/event-definitions-shell/event-definitions-shell.component";
import { CreateEventDefinitionComponent } from "@/app/event-definitions/pages/create-event-definition/create-event-definition.component";

const routes: Routes = [
    {
        path: "",
        component: EventDefinitionsShellComponent,
        children: [
            {
                path: "overview",
                component: EventOverviewComponent,
            },
            {
                path: "create",
                component: CreateEventDefinitionComponent,
            },
            {
                path: "**",
                redirectTo: "create",
            },
        ],
    },
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class EventDefinitionsRoutingModule {}
