import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule}  from '@angular/material/toolbar';
import { Footer } from './components/template/footer/footer';
import { Header } from './components/template/header/header';
import { Nav } from './components/template/nav/nav';




@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header,Footer,Nav],
  templateUrl: 'app.component.html',
})
export class App {
  protected readonly title = signal('transf-agenda-finan-web');
}
