import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentServiceService {
  constructor() {}
  getStudents()
  {
    return [
      { name: 'anu', age: 21, standard: 21 },
      { name: 'kumar', age: 34, standard: 39 },
      { name: 'keshri', age: 41, standard: 25 },
    ];
  }
}
