import { Component, OnInit } from '@angular/core';
import { card_data } from 'src/shared_data/dashboard';

@Component({
  selector: 'app-ad-dashboard',
  templateUrl: './ad-dashboard.component.html',
  styleUrls: ['./ad-dashboard.component.scss']
})
export class AdDashboardComponent implements OnInit {
  cardData = card_data;

  constructor() { }

  ngOnInit(): void {
  }

}
