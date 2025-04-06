import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
  progetti = [
    {
      titolo: 'DifoCostruzioni',
      descrizione: 'Esperienza e innovazione per costruzioni di qualità 🏗️',
      imgUrl: 'difocostruzioni.png',
      demo: 'https://difocostruzioni.it',
      github: 'https://github.com/Fedepera00',
    },
    {
      titolo: 'SpotifyClone',
      descrizione: 'Progettazione app desktop Spotify API 🎬',
      imgUrl: 'spotify.png',
      demo: 'https://spotifycloneteam4.netlify.app',
      github: 'https://github.com/Rik991/Build-Week-2-Spotify.git',
    },
    {
      titolo: 'Gestionale Patronato',
      descrizione: 'Gestione pratiche, anagrafiche e fatture per patronato 🏛️',
      imgUrl: 'Patronato.png',
      demo: 'https://patronato360.it',
      github: 'https://github.com/Fedepera00/patronato-gestionale',
    },
    {
      titolo: 'To-do List ',
      descrizione:
        'Progetto personale per la gestione di una to-do list app 💼',
      imgUrl: 'todolist.png',
      demo: 'https://todoapprobot.netlify.app',
      github: 'https://github.com/Fedepera00/S10-L5-EXAM-DAY.git',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
