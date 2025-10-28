import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card'; // Import MatCardModule
import { MatSidenavModule } from  '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';


@Component({
  selector: 'app-home',
  imports: [MatCardModule,MatSidenavModule,MatListModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
