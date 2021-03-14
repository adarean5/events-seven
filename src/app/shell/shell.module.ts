import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ShellRoutingModule } from "@/app/shell/shell-routing.module";
import { ShellComponent } from "./pages/shell/shell.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { MatRippleModule } from "@angular/material/core";

@NgModule({
    declarations: [ShellComponent],
    imports: [
        CommonModule,
        ShellRoutingModule,
        MatToolbarModule,
        MatButtonModule,
        MatMenuModule,
        MatIconModule,
        MatRippleModule,
    ],
})
export class ShellModule {}
