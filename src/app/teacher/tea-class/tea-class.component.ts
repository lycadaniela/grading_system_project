import { Component, OnInit } from '@angular/core';
import { ClassService } from 'src/app/services/class.service';

@Component({
  selector: 'app-tea-class',
  templateUrl: './tea-class.component.html',
  styleUrls: ['./tea-class.component.scss']
})
export class TeaClassComponent implements OnInit {
  

  classData: any[] = [];

  constructor(
    private classService: ClassService,
    ) {}

  ngOnInit(): void {
    this.loadClassData();
  }

  loadClassData(): void {
    this.classService.getAllClass().subscribe(
      (data) => {
        console.log('Received student data:', data);
        this.classData = data;
      },
      (error) => {
        console.error('Error fetching student data:', error);
      }
    );
  }


  
  
}
