import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { Book } from './book';
// import { BookService } from './service3/book.service';
// import { resolve } from 'path';
// import { promises } from 'dns';
//import { FirstserviceService } from './service1/firstservice.service';
// import { Observable } from 'rxjs';
// import { subscribe } from 'diagnostics_channel';
// import { response } from 'express';
// import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'self_pra';

  // signupForm = new FormGroup({
  //   name: new FormControl(''),
  //   age: new FormControl(''),
  //   email : new FormControl('')
  // });
  // handleSubmit(){
  //   console.log(this.signupForm.value);
  // }




    //data:any[] =[];
    //1. CREATE AN observable
    //the below function is observable
    // myObservable = new Observable((observer)=>{
    //     setTimeout(()=>{observer.next(1),'executed after 1 sec.'},1000);
    //     setTimeout(()=>{observer.next(2),'executed after 2 sec.'},2000);
    //     setTimeout(()=>{observer.next(3),'executed after 3 sec.'},3000);
    //     setTimeout(()=>{observer.next(4),'executed after 4 sec.'},4000);
    //     setTimeout(()=>{observer.next(5),'executed after 5 sec.'},5000);

    // });


     //the below function is observer
    // getData(){
    //   this.myObservable.subscribe((val: any)=>{
    //     this.data.push(val);
    //   });
    // }



  //   softBooks: Book[] = [];
  // constructor(private bookservice :BookService){}
  // getsofBooks(){
  //   this.bookservice.getBookFromStore().subscribe(books => this.softBooks= books);
  // }
 // constructor() {}

  ngOnInit() {
    // this.getsofBooks();

      // =====================Promise====================================

    // const promise = new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve('Promise is good');
    //   }, 2000);
    // });
    // promise.then((res) => console.log(res));
    // promise.catch((err) => console.log(err));

 // =====================observable====================================

    // const observable = new Observable((subscribe) => {
    //   setTimeout(() => {
    //     subscribe.next('observable is clean');
    //   }, 1000);
    // });
    // observable.subscribe((res) => console.log(res));




  }

  // constructor (private router: Router){}
  // student(){
  //   this.router.navigate(['/student']);
  // }
}

// mydate : string = "22-feb-2012";
// _msg: string = "";
// mydate: any;
// constructor(private _firstserviceService: FirstserviceService){
//  this._msg = _firstserviceService.getmessage ()
// }

// getmessage (){
//   this._msg = this._firstserviceService.getmessage();
// }
