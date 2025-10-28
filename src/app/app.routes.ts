

import { Routes } from '@angular/router';
import { Home } from './view/home/home';
import { App } from './app';
import { Transferencia } from './view/transferencia/transferencia';

export const routes: Routes = [
  { 
    path: "", component: Home  
 },
  {  
    path: "transferencia", component: Transferencia
  }
  
  ];