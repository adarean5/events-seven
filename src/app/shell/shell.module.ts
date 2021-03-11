import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ShellRoutingModule } from "@/app/shell/shell-routing.module";
import { ShellComponent } from "./pages/shell/shell.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
    declarations: [ShellComponent],
    imports: [
        CommonModule,
        ShellRoutingModule,
        MatToolbarModule,
        MatButtonModule,
    ],
})
export class ShellModule {}
