import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { routes } from "@event-manager/event-manager.routes";
import { EventOverviewComponent } from "./pages/event-overview/event-overview.component";

@NgModule({
    declarations: [EventOverviewComponent],
    imports: [CommonModule, RouterModule.forChild(routes())],
})
export class EventManagerModule {}
