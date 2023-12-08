import { Component, OnInit } from '@angular/core';
import { card_data } from 'src/shared_data/dashboard';

@Component({
  selector: 'app-ad-dashboard',
  templateUrl: './ad-dashboard.component.html',
  styleUrls: ['./ad-dashboard.component.scss']
})
export class AdDashboardComponent implements OnInit {
  cardData = [
    { title: 'Teachers', value: '67', icon: 'fa fa-id-badge box-icon', design: 'design1' as const, destination: '/admin-teacher' },
    { title: 'Students', value: '89', icon: 'fa fa-id-card box-icon', design: 'design1' as const, destination: '/page2' },
    { title: 'Class', value: '24', icon: 'fa fa-th box-icon', design: 'design1' as const, destination: '/page2' },
    { title: 'Subjects', value: '75', icon: 'fa fa-book box-icon', design: 'design1' as const, destination: '/page2' },
    // Add more cards with their respective destinations
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
