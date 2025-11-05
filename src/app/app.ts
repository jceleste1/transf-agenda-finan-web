import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './components/template/footer/footer';
import { Header } from './components/template/header/header';
import { Nav } from './components/template/nav/nav';
import { Home } from './view/home/home';
import { Transferencia } from './view/transferencia/transferencia';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { Transferencia2Component } from './components/transferencia/transferencia2/transferencia2.component';
import { CommonModule } from '@angular/common'; // IMPORTAR O CommonModule, caso o Browser Module não o esteja exportando no contexto do seu projeto.
import { provideHttpClient } from '@angular/common/http';
import { TransferenciaService } from './components/transferencia/services/transferencia-service';
import { RouterModule } from '@angular/router';
 import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, 
  FormsModule,
  MatTableModule,
  MatFormFieldModule,
  MatInputModule, 
  RouterModule ,
  RouterLink,
  Header,
  Footer,
  CommonModule,
  Nav,
  Home, 
  Transferencia,
  Transferencia2Component],
  templateUrl: 'app.component.html',
  providers: [TransferenciaService,RouterLink], // <- add here!
  
})
export class App {
  protected readonly title = signal('transf-agenda-finan-web');
}
