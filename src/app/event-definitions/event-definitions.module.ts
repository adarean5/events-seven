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
import { EventDefinitionsShellComponent } from "./pages/event-definitions-shell/event-definitions-shell.component";
import { CreateEventDefinitionComponent } from "./pages/create-event-definition/create-event-definition.component";
import { EventDefinitionFormComponent } from "./components/event-definition-form/event-definition-form.component";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
    declarations: [
        EventOverviewComponent,
        EventDefinitionsShellComponent,
        CreateEventDefinitionComponent,
        EventDefinitionFormComponent,
    ],
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
        MatIconModule,
    ],
})
export class EventDefinitionsModule {}
