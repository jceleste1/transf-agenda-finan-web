import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav'; // Import MatSidenavModule
import { MatListModule } from '@angular/material/list'; // Import MatListModule
import { Home } from '../../../view/home/home';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-nav',
  imports: [  MatSidenavModule,MatListModule,Home,   RouterModule ],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {

}
