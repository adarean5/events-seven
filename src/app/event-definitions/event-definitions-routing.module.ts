import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EventOverviewComponent } from "@/app/event-definitions/pages/event-overview/event-overview.component";

const routes: Routes = [
    {
        path: "",
        component: EventOverviewComponent,
    },
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class EventDefinitionsRoutingModule {}
