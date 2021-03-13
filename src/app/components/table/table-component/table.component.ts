import {
    AfterViewInit,
    Component,
    Input,
    OnInit,
    ViewChild,
} from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";

@Component({
    selector: "app-table",
    templateUrl: "./table.component.html",
    styleUrls: ["./table.component.scss"],
})
export class TableComponent<T> implements OnInit, AfterViewInit {
    @Input() rowData!: Array<T>;
    @Input() columnDefs!: Array<any>;
    @Input() pageSizeOptions: Array<number> = [10, 15, 25, 50, 100];

    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;

    eventsDataSource = new MatTableDataSource<T>();
    columnsToDisplay: Array<string> = [];

    constructor() {}

    ngOnInit(): void {
        this.eventsDataSource.data = this.rowData;
        this.columnsToDisplay = this.columnDefs.map((column) => column.def);
    }

    ngAfterViewInit(): void {
        this.eventsDataSource.paginator = this.paginator;
        this.eventsDataSource.sort = this.sort;
    }
}
