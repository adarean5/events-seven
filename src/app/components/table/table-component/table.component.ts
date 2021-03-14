import {
    AfterViewInit,
    Component,
    Input,
    OnInit,
    Output,
    ViewChild,
    EventEmitter,
} from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";

@Component({
    selector: "app-table",
    templateUrl: "./table.component.html",
    styleUrls: ["./table.component.scss"],
})
export class TableComponent<I, O> implements OnInit, AfterViewInit {
    @Input() set rowData(newRowData: I[]) {
        this.eventsDataSource.data = newRowData;
    }
    @Input() columnDefs!: Array<any>;
    @Input() isPaginationEnabled?: boolean;
    @Input() pageSizeOptions: Array<number> = [10, 15, 25, 50, 100];
    @Input() getRowId!: (rowModel: I) => O;
    @Output() rowClick = new EventEmitter<O>();

    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;

    eventsDataSource = new MatTableDataSource<I>();
    columnsToDisplay: Array<string> = [];

    constructor() {}

    ngOnInit(): void {
        this.columnsToDisplay = this.columnDefs.map((column) => column.def);
    }

    ngAfterViewInit(): void {
        if (this.isPaginationEnabled) {
            this.eventsDataSource.paginator = this.paginator;
        }
        this.eventsDataSource.sort = this.sort;
    }

    onRowClick(row: I): void {
        const rowId = this.getRowId(row);
        this.rowClick.emit(rowId);
    }
}
