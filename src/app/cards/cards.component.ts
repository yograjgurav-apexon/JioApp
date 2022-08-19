import { Component, OnInit } from '@angular/core';

export interface listItem {
  imgSrc: string;
  btnText: string;
  cardTitle: string;
  cardText: string;
  cardBtn: string;
}
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  cardList: listItem[] = [
    {
      imgSrc: '../../assets/Saavnpro-13july2022.jpg',
      btnText: 'JIOSAAVAN PRO',
      cardTitle: 'Uninterrupted, ad-free music!',
      cardText:
        'Ad-free music, unlimited downloads, exclusive originals, JioTunes, and more.',
      cardBtn: 'Try JioSaavan Pro',
    },
    {
      imgSrc: '../../assets/HealthHub-13thjuly2022.jpg',
      btnText: 'JIOHEALTH HUB',
      cardTitle: "Doctor's care, on the go!",
      cardText:
        'Book tests, consult doctors or even share reports with your doctor.',
      cardBtn: 'Explore JioHealthHub',
    },
    {
      imgSrc: '../../assets/Hamleys-13thjuly2022.jpg',
      btnText: 'HAMLEYS',
      cardTitle: 'The joy of buying toys!',
      cardText:
        'Play toys, watch demos, and meet fun characters at Hamleys stores!',
      cardBtn: 'Hamleys store near me',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
