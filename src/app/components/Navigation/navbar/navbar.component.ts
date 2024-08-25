import { Component } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [SearchComponent,SidebarComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  menuOpen=false;

  toggleMenu(){
    this.menuOpen=!this.menuOpen;
  }
}
