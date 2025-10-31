import { AfterContentInit, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { TransferenciaService } from '../../components/transferencia/services/transferencia-service';
import { TransferenciaDTO } from './models/transferencia.model';

import { AfterViewInit,  ViewChild } from '@angular/core';
import { MatTableModule, MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-transferencia',
  imports: [MatTableModule, MatPaginatorModule, MatSortModule],
  templateUrl: './transferencia.html',
  styleUrl: './transferencia.css',
})
export class Transferencia  implements OnInit, AfterViewInit{

  constructor(private router: Router  , private transferenciaService:   TransferenciaService ) {
  
  
  }
  @ViewChild(MatTable) table!: MatTable<TransferenciaDTO>;

  displayedColumns: string[] =  ['id', 'name', 'contaOrigem' ]
  baseUrl = "http://localhost:3001/transferencias";
  dataSource: any[] = [];

   
  ngOnInit(): void { 
    
  }


 ngAfterViewInit(): void { 
      this.transferenciaService.read().subscribe(data => {
          this.dataSource = data;
        }
      );

      this.table.dataSource = this.dataSource;
  }



   cancel(): void {
    this.router.navigate(["" ]) ;
  }

 }

