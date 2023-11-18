import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() title : string = "";
  @Input() value : string = "";
  @Input() icon : string = "";



  @Input() subjectTitle : string = "";
  @Input() subjectCode : string = "";

  
  @Input() design: 'design1' | 'design2' = 'design1';

  constructor() { }

  ngOnInit(): void {
  }

}
