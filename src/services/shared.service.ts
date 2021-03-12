import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private currentCartCount = new BehaviorSubject(0);
  currentMessage = this.currentCartCount.asObservable();
  private inputvalue=new BehaviorSubject("");
  currentinputvalue=this.inputvalue.asObservable();

  constructor() {
   }
   updateCartCount(count: number) {
    this.currentCartCount.next(count)
  }

  updateInputValue(value:string)
  {
    this.inputvalue.next(value);

  }
}
