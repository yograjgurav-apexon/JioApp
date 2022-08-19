import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  faSearch = faSearch;
  jioLogo: string = '../../assets/Jio-Logo.png';
  navbarList: string[] = ['Mobile', 'JioFiber', 'Business', 'Shop', 'Apps'];

  constructor() {}

  ngOnInit(): void {}
}
