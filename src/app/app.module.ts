import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { environment } from "@/environments/environment";
import { AppStoreModule } from "./app-store/app-store.module";
import { AuthModule } from "@auth/auth.module";
import { ShellModule } from "./shell/shell.module";

@NgModule({
    declarations: [AppComponent],
    imports: [
        AuthModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireAuthModule,
        AppStoreModule,
        ShellModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
