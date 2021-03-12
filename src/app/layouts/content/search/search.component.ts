import { Component, OnInit } from '@angular/core';
import { Categorycard } from 'src/app/ProductComponent/mainproduct/categorycard';
import { SharedService } from 'src/services/shared.service';
import { MainProductService } from 'src/services/main-product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  SearchesProducts:Categorycard[]=[];
  InputValue:string;
  
  constructor(private SearchService:SharedService,private search:MainProductService) { 
    this.SearchService.currentinputvalue.subscribe((res)=>this.InputValue=res);
}

  ngOnInit() {
   
this.search.getProductSearched(this.InputValue).subscribe((res)=>{this.SearchesProducts=res;console.log(this.SearchesProducts);},(err)=>{console.log(err);});
  }

}
