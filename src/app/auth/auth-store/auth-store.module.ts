import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { authReducer } from "@auth/auth-store/auth.reducer";
import { EffectsModule } from "@ngrx/effects";
import { AuthEffects } from "@auth/auth-store/auth.effects";

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        StoreModule.forFeature("auth", authReducer),
        EffectsModule.forFeature([AuthEffects]),
    ],
})
export class AuthStoreModule {}
