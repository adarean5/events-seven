import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AuthModule } from "@auth/auth.module";
import { StoreModule } from "@ngrx/store";
import { authReducer } from "@/app/app-store/auth-store/auth.reducer";
import { EffectsModule } from "@ngrx/effects";
import { AuthEffects } from "@/app/app-store/auth-store/auth.effects";

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        AuthModule,
        StoreModule.forFeature("auth", authReducer),
        EffectsModule.forFeature([AuthEffects]),
    ],
})
export class AuthStoreModule {}
