import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EventOverviewComponent } from "./pages/event-overview/event-overview.component";
import { EventDefinitionsRoutingModule } from "@/app/event-definitions/event-definitions-routing.module";
import { TableModule } from "@/app/components/table/table.module";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { EventDefinitionsStoreModule } from "@/app/event-definitions/event-definitions-store/event-definitions-store.module";
import { EventDefinitionsServicesModule } from "@/app/event-definitions/services/event-definitions-services.module";

@NgModule({
    declarations: [EventOverviewComponent],
    imports: [
        CommonModule,
        EventDefinitionsRoutingModule,
        EventDefinitionsServicesModule,
        TableModule,
        MatCardModule,
        MatInputModule,
        MatSelectModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        EventDefinitionsStoreModule,
    ],
})
export class EventDefinitionsModule {}
