// portfolio.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
  // Definisci qui l'array "progetti"
  progetti = [
    {
      titolo: 'Progetto 1',
      imgUrl: 'https://via.placeholder.com/400x300',
      descrizione: 'Descrizione del primo progetto',
      demo: 'https://demo-progetto1.it',
      github: 'https://github.com/utente/progetto1',
    },
    {
      titolo: 'Progetto 2',
      imgUrl: 'https://via.placeholder.com/400x300',
      descrizione: 'Descrizione del secondo progetto',
      demo: 'https://demo-progetto2.it',
      github: 'https://github.com/utente/progetto2',
    },
    // ... Aggiungi altri progetti
  ];

  constructor() {}

  ngOnInit(): void {}
}
