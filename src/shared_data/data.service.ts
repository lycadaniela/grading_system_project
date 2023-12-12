import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private recordsData: any[] = [];

  constructor() {}

  addRecord(record: any) {
    this.recordsData.push(record);
  }

  getRecords() {
    return this.recordsData;
  }
}
