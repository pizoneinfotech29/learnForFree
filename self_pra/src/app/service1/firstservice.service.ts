import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirstserviceService {
 private _message = "jai Shree Ram";
  constructor() { }

  getmessage (){
    return this._message;
  }
}
