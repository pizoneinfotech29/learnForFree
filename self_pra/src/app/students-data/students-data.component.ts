import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from '../service2/student-service.service';

@Component({
  selector: 'app-students-data',
  templateUrl: './students-data.component.html',
  styleUrl: './students-data.component.css',
  //providers:[StudentServiceService]
})
export class StudentsDataComponent implements OnInit {
  public students : any;
 constructor (private std:StudentServiceService){
   this.students = std.getStudents();
  //  console.log(std.getStudents);
 }
  ngOnInit(): void {

  }
}
