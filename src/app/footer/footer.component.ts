import { Component, OnInit } from '@angular/core';
import {
  faTwitter,
  faInstagram,
  faFacebook,
  faYoutube,
  faLinkedin,
  IconDefinition,
} from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';

export interface List {
  listItem: string;
  listItems: {
    item1: string;
    item2: string;
    item3: string;
    item4: string;
    item5: string;
  };
  // listItem2:[
  //   {
  //     item1: string,
  //     item2: string,
  //     item3: string,
  //     item4: string,
  //     item5: string,
  //   }
  // ],
  // listItem3:[
  //   {
  //     item1: string,
  //     item2: string,
  //     item3: string,
  //     item4: string,
  //     item5: string,
  //   }
  // ],
  // listItem4:[
  //   {
  //     item1: string,
  //     item2: string,
  //     item3: string,
  //     item4: string,
  //     item5: string,
  //   }
  // ]
}

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

  androidImg: string =
    'https://jep-asset.akamaized.net/jio/svg/android-ios-logo/G-Play.svg';

  iosImg: string =
    'https://jep-asset.akamaized.net/jio/svg/android-ios-logo/AppStore.svg';

  iconsList: IconDefinition[] = [
    faTwitter,
    faInstagram,
    faFacebook,
    faYoutube,
    faLinkedin,
  ];

  footerList: List[] = [
    {
      listItem: 'Our Offerings',
      listItems: {
        item1: 'Mobile',
        item2: 'Fiber',
        item3: 'Business',
        item4: 'Apps',
        item5: 'Shop',
      },
    },
    {
      listItem: 'Support',
      listItems: {
        item1: 'Explore Support',
        item2: 'Locate us',
        item3: 'FAQ',
        item4: 'Track Order',
        item5: 'Contact us',
      },
    },
    {
      listItem: 'Our company',
      listItems: {
        item1: 'Reliance Industries',
        item2: 'Reliance Foundation',
        item3: 'JioLife',
        item4: 'Careers',
        item5: 'Investor relations',
      },
    },
    {
      listItem: 'Useful links',
      listItems: {
        item1: 'Get Jio SIM',
        item2: 'Get JioFiber',
        item3: 'Recharge',
        item4: 'Pay Bills',
        item5: 'Login',
      },
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
