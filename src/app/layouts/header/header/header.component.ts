import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
cartItemCount:number=0;
iinput:string;
  constructor(private sheredService:SharedService) { }
  onKey(event)
  {
   this.iinput=event.target.value;
   this.sheredService.updateInputValue(this.iinput);
   
  }
  ngOnInit() {
    this.sheredService.currentMessage.subscribe((res)=>this.cartItemCount=res);
    
  }

}
