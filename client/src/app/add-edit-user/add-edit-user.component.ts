import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../shared/service.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.css']
})
export class AddEditUserComponent implements OnInit {
  userForm: FormGroup;
  occupationList: string[] = ['Job', 'Student', 'Business'];
  category :string[]= ['General', 'OBC','SC','ST']

  showJobDetails: boolean = false;
  showBusinessDetails: boolean = false;
  student:boolean = false;


  constructor(private fb: FormBuilder, private service: ServiceService, private dialogRef: MatDialogRef<AddEditUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.userForm = this.fb.group({
      name:['',[Validators.compose([Validators.required,Validators.pattern('[a-zA-Z].')])]],
      fullname: ['',[Validators.compose([Validators.required,Validators.pattern('[a-zA-Z].')])]],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      age: ['', Validators.compose([Validators.required])],
      gender: ['', Validators.compose([Validators.required])],
      category: ['', Validators.compose([Validators.required])],
      occupationList: ['', Validators.compose([Validators.required])],
      phone: ['',Validators.compose( [Validators.required, Validators.pattern('[0-9]{10}')])],
      jobList: [''],
      businessList: [''],
      ctc: [''],
      exp: [''],
      btype: [''],
      numofemp: ['']
    });
  }
  ngOnInit(): void {
    this.userForm.patchValue(this.data);
  }

  onFormSubmit() {
    if (this.userForm.valid) {
      if (this.data) {
        this.service.updateUser(this.data.id, this.userForm.value).subscribe({
          next: (val: any) => {
            alert("User updated successfully 😊");
            this.dialogRef.close(true);
          },
          error: (err: any) => {
            alert(err);
          }
        });
      } else {
        this.service.addUser(this.userForm.value).subscribe({
          next: (val: any) => {
            alert("User added successfully 😊");
            this.dialogRef.close(true);
          },
          error: (err: any) => {
            alert(err);
          }
        });
      }
    }
  }

  onOccupationChange(value: string) {
    this.showJobDetails = value === 'Job';
    this.showBusinessDetails = value === 'Business';
    if (!this.showJobDetails) {
      this.userForm.get('ctc')?.reset();
      this.userForm.get('exp')?.reset();
    }
    if (!this.showBusinessDetails) {
      this.userForm.get('btype')?.reset();
      this.userForm.get('numofemp')?.reset();
    }

      if (value === 'Student') {
        this.userForm.get('Student')?.reset();
        
      }
   
  }
}
