import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ShellRoutingModule } from "@/app/shell/shell-routing.module";
import { ShellComponent } from "./pages/shell/shell.component";

@NgModule({
    declarations: [ShellComponent],
    imports: [CommonModule, ShellRoutingModule],
})
export class ShellModule {}
