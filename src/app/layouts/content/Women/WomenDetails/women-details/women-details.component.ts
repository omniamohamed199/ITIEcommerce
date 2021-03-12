import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainProductService } from 'src/services/main-product.service';
import { Categorycard } from 'src/app/ProductComponent/mainproduct/categorycard';
import { SharedService } from 'src/services/shared.service';

@Component({
  selector: 'app-women-details',
  templateUrl: './women-details.component.html',
  styleUrls: ['./women-details.component.css']
})
export class WomenDetailsComponent implements OnInit {
  DetailsList:Categorycard;
Id:any;

@Output() cartEvent = new EventEmitter<number>();
  constructor(private idfordetails:ActivatedRoute,private womenDetails:MainProductService,private sharedService:SharedService) { 
  this.DetailsList=new Categorycard();}

  ngOnInit() {
    let id=parseInt(this.idfordetails.snapshot.paramMap.get('CategoryCard_ID'));
    this.Id=id;
    this.womenDetails.getwomenDetails(id).subscribe((data)=>{this.DetailsList=data;});
  }
  
}
            
              
