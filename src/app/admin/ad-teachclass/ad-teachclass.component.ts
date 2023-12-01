import { Component, OnInit } from '@angular/core';
import { teachClass_data } from 'src/shared_data/teachclass';

@Component({
  selector: 'app-ad-teachclass',
  templateUrl: './ad-teachclass.component.html',
  styleUrls: ['./ad-teachclass.component.scss']
})
export class AdTeachclassComponent implements OnInit {

  teachClassData = teachClass_data;

  constructor() { }

  ngOnInit(): void {
  }

}
