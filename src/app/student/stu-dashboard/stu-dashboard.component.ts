import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stu-dashboard',
  templateUrl: './stu-dashboard.component.html',
  styleUrls: ['./stu-dashboard.component.scss']
})
export class StuDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  stuData = [
    { title: 'Teachers', value: '67', icon: 'fa fa-id-badge box-icon', design: 'design1' as const, destination: '/admin-teacher' },
    { title: 'Students', value: '89', icon: 'fa fa-id-card box-icon', design: 'design1' as const, destination: '/page2' },
    // Add more cards with their respective destinations
  ];

}
