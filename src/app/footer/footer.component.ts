import { Component, OnInit } from '@angular/core';
import {
  faTwitter,
  faInstagram,
  faFacebook,
  faYoutube,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faFacebook = faFacebook;
  faYoutube = faYoutube;
  faLinkedin = faLinkedin;
  faCopyright = faCopyright;

  constructor() {}

  ngOnInit(): void {}
}
