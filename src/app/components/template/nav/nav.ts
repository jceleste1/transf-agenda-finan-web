import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav'; // Import MatSidenavModule
import { MatListModule } from '@angular/material/list'; // Import MatListModule


@Component({
  selector: 'app-nav',
  imports: [  MatSidenavModule,MatListModule ],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {

}
