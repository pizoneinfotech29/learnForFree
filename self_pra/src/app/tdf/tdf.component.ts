import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { StudentForm } from '../student-form';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrl: './tdf.component.css'
})
export class TdfComponent implements OnInit {

  constructor() {}

   std  = new StudentForm('prem', 24, 'anurag@gmail.com')

  save(formData: any) {
  //console.log(formData.value);
  // const std = new StudentForm(formData.name, formData.age, formData.email);
  // console.log(std);
  }


ngOnInit(): void {


}

}
