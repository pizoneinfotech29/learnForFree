import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { FolderButtonComponent } from './folderbutton/folderbutton.component';
import { TableButtonComponent } from './tablebutton/tablebutton.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, MatButtonModule, MatIconModule,FolderButtonComponent,TableButtonComponent],
    template: `
    <div>

    </div>
    `,
})


export class AppComponent {

  tableData: string[] = [];
  folderData: string[] = [];

openintput: boolean= false;

inputdata(){
  this.openintput = false;
}



inputData: string = '';

saveData() {
  // Here you can save the inputData to your desired location, such as a database or a service.
  console.log('Input Data Saved:', this.inputData);
  // You can also reset the form after saving the data if needed.
  // this.formData.reset();
}

clearInput() {
  // Clear the input field and reset the form
  this.inputData = '';
  // this.formData.reset();
}















  // saveTableData(data: string) {
  //   this.tableData.push(data);
  //   console.log('Table data saved:', data);
  // }

  // cancelTable() {
  //   console.log('Table input canceled');
  //   this.cancelTable();
  // }

  // saveFolderData(data: string) {
  //   this.folderData.push(data);
  //   console.log('Folder data saved:', data);
  // }

  // cancelFolder() {
  //   console.log('Folder input canceled');
  //   console.log('Folder input canceled');
  //   this.cancelFolder();
  // }
}

