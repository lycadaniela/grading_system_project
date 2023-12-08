import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() title: string = "";
  @Input() value: string = "";
  @Input() icon: string = "";
  @Input() design: 'design1' | 'design2' = 'design1';
  @Input() destination: string = '';


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToPage() {
    // Use the router to navigate to the specified destination
    if (this.destination) {
      this.router.navigate([this.destination]);
    }
  }

}
