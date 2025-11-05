import { ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { TransferenciaService } from '../../components/transferencia/services/transferencia-service';
import { TransferenciaDTO } from './models/transferencia.model';
 import { RouterLink } from '@angular/router';
import { AfterViewInit,  ViewChild } from '@angular/core';
import { MatTableModule, MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { RouterModule } from '@angular/router'; // <-- Importe aqui!

@Component({
  selector: 'app-transferencia',
  imports: [MatTableModule, MatPaginatorModule, MatSortModule, RouterModule, RouterLink],
  templateUrl: './transferencia.html',
  styleUrl: './transferencia.css',
})
export class Transferencia  implements OnInit, AfterViewInit{

   constructor(private router: Router  ,  
      private routerLink:   RouterLink,
      private changeDetectorRefs: ChangeDetectorRef, 
       private transferenciaService:   TransferenciaService,
      private routerModule: RouterModule ) {
     
   }
   @ViewChild(MatTable) table!: MatTable<TransferenciaDTO>;

   displayedColumns: string[] =  ['id', 'name', 'contaOrigem' ,'action' ]
   dataSource: any[] = [];

  ngOnInit(): void {       
  }


  ngAfterViewInit(): void { 
        this.transferenciaService.read().subscribe(data => {
            this.dataSource = data;
              this.changeDetectorRefs.detectChanges();
          }
        );
        this.table.dataSource = this.dataSource;
    }

    cancel(): void {
      this.router.navigate(["" ]) ;
    }

 }

