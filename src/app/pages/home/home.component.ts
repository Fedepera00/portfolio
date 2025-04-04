import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isHomePage = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Se serve per sicurezza (non strettamente obbligatorio se sei già nella home)
    this.isHomePage = this.router.url === '/';
  }
}
