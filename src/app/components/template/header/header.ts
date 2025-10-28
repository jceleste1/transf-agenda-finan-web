import { Component, OnInit } from '@angular/core';
 import { MatToolbarModule } from '@angular/material/toolbar'; // Import the module


@Component({
  selector: 'app-header',
  imports: [MatToolbarModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit {

  ngOnInit(): void {
  }


}
