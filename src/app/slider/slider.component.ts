import { Component, OnInit } from '@angular/core';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit {
  faPlayCircle = faPlayCircle;
  bgImg: string = 'url(../../assets/Banner-DhanDhanDhan-desktop-new.jpg)';

  constructor() {}

  ngOnInit(): void {}
}
