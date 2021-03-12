import { Component, OnInit } from '@angular/core';
import { Categorycard } from './categorycard';
import { MainProductService } from 'src/services/main-product.service';
import { SharedService } from 'src/services/shared.service';

@Component({
  selector: 'app-mainproduct',
  templateUrl: './mainproduct.component.html',
  styleUrls: ['./mainproduct.component.css']
})
export class MainproductComponent implements OnInit {
MainProductList:Categorycard[]=[];


  constructor(private mainProductServ:MainProductService,private SearchService:SharedService) { 

  }

  ngOnInit() {
    this.mainProductServ.getProducts().subscribe((data)=>{this.MainProductList=data; console.log(data);},(err)=>console.log(err));
  }

}
