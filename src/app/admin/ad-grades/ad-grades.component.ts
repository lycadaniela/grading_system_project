import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ad-grades',
  templateUrl: './ad-grades.component.html',
  styleUrls: ['./ad-grades.component.scss']
})
export class AdGradesComponent implements OnInit {
  studentName: string = '';
  subject: string = '';
  score: number = 0;
  studentGrades: any[] = [];

  checkGrade() {
    const result = this.score >= 75 ? 'Pass' : 'Fail';

    const studentDetails = `${this.studentName} - ${this.subject} - ${this.score} - ${result}`;
    this.studentGrades.push(studentDetails);

    // Show modal for result
    const passResult = `${this.studentName} has ${result.toLowerCase()}ed ${this.subject}.`;
    this.showModal(passResult);
  }

  deleteGrade(index: number) {
    this.studentGrades.splice(index, 1);
  }

  private showModal(result: string) {
    // Implement modal display logic here
    // You can use Angular Material Dialog or any other modal library
    // For simplicity, you can use console.log to display the result
    console.log(result);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
