import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { eventDefinitionsReducer } from "@/app/event-definitions/event-definitions-store/event-definitions.reducer";
import { EffectsModule } from "@ngrx/effects";
import { EventDefinitionsEffects } from "@/app/event-definitions/event-definitions-store/event-definitions.effects";
import { featureName } from "@/app/event-definitions/event-definitions-store/event-definitions.state";

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        StoreModule.forFeature(featureName, eventDefinitionsReducer),
        EffectsModule.forFeature([EventDefinitionsEffects]),
    ],
})
export class EventDefinitionsStoreModule {}
