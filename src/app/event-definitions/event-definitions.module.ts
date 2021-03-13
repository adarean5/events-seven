import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EventOverviewComponent } from "./pages/event-overview/event-overview.component";
import { EventDefinitionsRoutingModule } from "@/app/event-definitions/event-definitions-routing.module";
import { TableModule } from "@/app/components/table/table.module";
import { MatCardModule } from "@angular/material/card";

@NgModule({
    declarations: [EventOverviewComponent],
    imports: [
        CommonModule,
        EventDefinitionsRoutingModule,
        TableModule,
        MatCardModule,
    ],
})
export class EventDefinitionsModule {}
