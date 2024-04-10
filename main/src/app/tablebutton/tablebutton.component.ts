import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-table-button',
  standalone: true,
  imports: [CommonModule,FormsModule],
  template: `
  `,
})
export class TableButtonComponent {
  @Output() save = new EventEmitter<string>();
  @Output() cancel = new EventEmitter<void>();






















  
  // inputValue = '';
  // showInputBox = false;

  // openInputBox() {
  //   this.showInputBox = true;
  // }

  // saveData() {
  //   this.save.emit(this.inputValue);
  //   this.showInputBox = false;
  // }

  // Cancel() {
  //   this.showInputBox = false;
  //   this.cancel.emit();
  // }
}

















// ==========HTMl============
// <li style="cursor: pointer;" (click)="openInputBox()">
// <svg
//   xmlns="http://www.w3.org/2000/svg"
//   width="20"
//   height="20"
//   fill="currentColor"
//   class="bi bi-table"
//   viewBox="0 0 16 16"
//   style="margin-left: 15%;"
// >
//   <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 2h-4v3h4zm0 4h-4v3h4zm0 4h-4v3h3a1 1 0 0 0 1-1zm-5 3v-3H6v3zm-5 0v-3H1v2a1 1 0 0 0 1 1zm-4-4h4V8H1zm0-4h4V4H1zm5-3v3h4V4zm4 4H6v3h4z" />
// </svg>
// -Table
// </li>
// <div *ngIf="showInputBox">
// <input type="text" [(ngModel)]="inputValue" />
// <button (click)="saveData()">Save</button>
// <button (click)="Cancel()">Cancel</button>
// </div>