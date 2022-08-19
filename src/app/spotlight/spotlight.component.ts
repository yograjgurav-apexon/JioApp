import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spotlight',
  templateUrl: './spotlight.component.html',
  styleUrls: ['./spotlight.component.css'],
})
export class SpotlightComponent implements OnInit {
  bgUrl: string = 'https://www.jio.com/jiofi-hmpg-spotlight.png';

  constructor() {}

  ngOnInit(): void {}
}
