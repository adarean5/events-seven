import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TableComponent } from "./table-component/table.component";
import { MatTableModule } from "@angular/material/table";
import { MatSortModule } from "@angular/material/sort";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatRippleModule } from "@angular/material/core";

@NgModule({
    declarations: [TableComponent],
    imports: [
        CommonModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        MatRippleModule,
    ],
    exports: [TableComponent],
})
export class TableModule {}
