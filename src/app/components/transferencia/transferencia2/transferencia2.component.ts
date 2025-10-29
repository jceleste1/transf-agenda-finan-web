import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableModule, MatTable } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { Transferencia2DataSource, Transferencia2Item } from './transferencia2-datasource';

@Component({
  selector: 'app-transferencia2',
  templateUrl: './transferencia2.component.html',
  styleUrl: './transferencia2.component.css',
  imports: [MatTableModule, MatPaginatorModule, MatSortModule]


})
export class Transferencia2Component implements AfterViewInit {


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Transferencia2Item>;
  dataSource = new Transferencia2DataSource();

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
