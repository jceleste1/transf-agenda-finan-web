import { Injectable } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";
import { HttpClient } from "@angular/common/http";
import { Observable, EMPTY } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { TransferenciaDTO } from '../../../view/transferencia/models/transferencia.model';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

   baseUrl = "http://localhost:3001/transferencias";


  constructor(private snackBar: MatSnackBar, private http: HttpClient) {

  }


  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }



  getTransferencia(): Observable<TransferenciaDTO[]> {
    return this.http.get<TransferenciaDTO[]>(this.baseUrl);
  }



   read(): Observable<TransferenciaDTO[]> {
    return this.http.get<TransferenciaDTO[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }
  

  errorHandler(e: any): Observable<any> {
      this.showMessage("Ocorreu um erro!", true);
      return EMPTY;
  }


  
}