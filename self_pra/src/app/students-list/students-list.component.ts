import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from '../service2/student-service.service';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrl: './students-list.component.css',
 // providers:[StudentServiceService]
})
export class StudentsListComponent implements OnInit {
  public students : any;
 constructor (private std:StudentServiceService){
   this.students = std.getStudents();
  //  console.log(std.getStudents);
 }
  ngOnInit(): void {

  }
}
