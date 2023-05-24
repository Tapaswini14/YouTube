import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'YouTube';
  isSideNavOpen = false;

  toggleSideNav() {
    this.isSideNavOpen = !this.isSideNavOpen;
  }

  
}


