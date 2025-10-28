import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav'; // Import MatSidenavModule
import { MatListModule } from '@angular/material/list'; // Import MatListModule
import { Home } from '../../../view/home/home';


@Component({
  selector: 'app-nav',
  imports: [  MatSidenavModule,MatListModule,Home ],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {

}
