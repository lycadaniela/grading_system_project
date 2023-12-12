import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stu-score',
  templateUrl: './stu-score.component.html',
  styleUrls: ['./stu-score.component.scss']
})
export class StuScoreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scoreData = [
    { title: 'Teachers', value: '67', icon: 'fa fa-id-badge box-icon', design: 'design2' as const, destination: '/admin-teacher' },
    { title: 'Students', value: '89', icon: 'fa fa-id-card box-icon', design: 'design2' as const, destination: '/page2' },
    { title: 'Class', value: '24', icon: 'fa fa-th box-icon', design: 'design2' as const, destination: '/page2' },
    { title: 'Subjects', value: '75', icon: 'fa fa-book box-icon', design: 'design2' as const, destination: '/page2' },
    // Add more cards with their respective destinations
  ];

}
