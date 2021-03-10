import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { userReducer } from "@/app/app-store/user-store/user.reducer";
import { EffectsModule } from "@ngrx/effects";
import { UserEffects } from "@/app/app-store/user-store/user.effects";

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        StoreModule.forFeature("user", userReducer),
        EffectsModule.forFeature([UserEffects]),
    ],
})
export class UserStoreModule {}
