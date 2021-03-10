import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { routerReducer } from "@ngrx/router-store";
import { AuthStoreModule } from "./auth-store/auth-store.module";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "@/environments/environment";
import { EffectsModule } from "@ngrx/effects";
import { UserStoreModule } from "@/app/app-store/user-store/user-store.module";

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        StoreModule.forRoot(
            { router: routerReducer },
            {
                runtimeChecks: {
                    strictActionImmutability: true,
                    strictStateImmutability: true,
                },
            },
        ),
        StoreDevtoolsModule.instrument({
            maxAge: 25,
            logOnly: environment.production,
        }),
        EffectsModule.forRoot([]),
        UserStoreModule,
        AuthStoreModule,
    ],
})
export class AppStoreModule {}
