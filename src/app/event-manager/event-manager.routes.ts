import { Routes } from "@angular/router";
import { EventOverviewComponent } from "@event-manager/pages/event-overview/event-overview.component";

const ROUTES: Routes = [
    {
        path: "",
        component: EventOverviewComponent,
    },
];

export function routes(): Routes {
    return ROUTES;
}
