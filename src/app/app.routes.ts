

import { Routes } from '@angular/router';
import { Home } from './view/home/home';
import { App } from './app';
import { Transferencia } from './view/transferencia/transferencia';
import { Transferencia2Component } from './components/transferencia/transferencia2/transferencia2.component';

export const routes: Routes = [
  { 
    path: "", component: Home  
 },
  {  
    path: "transferencia", component: Transferencia
  },
  {  
    path: "transferencia2Component", component: Transferencia2Component
  },
  {  
    path: "transferencia/delete/:id", component: Transferencia
  },
  {  
    path: "transferencia/update/:id", component: Transferencia
  },
  
  ];


  