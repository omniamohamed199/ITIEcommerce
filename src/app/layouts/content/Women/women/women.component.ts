import { Component, OnInit } from '@angular/core';
import { MainProductService } from 'src/services/main-product.service';
import { Categorycard } from 'src/app/ProductComponent/mainproduct/categorycard';
import {Router} from '@angular/router'
import { SharedService } from 'src/services/shared.service';
@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.css']
})
export class WomenComponent implements OnInit {
  WomenProductList:Categorycard[]=[];
  productAddedTocart:Categorycard[];
cartItemCount: number = 0;

  constructor(private womenproduct:MainProductService , private router:Router,private cartSharedService:SharedService ) {
   
  }

  ngOnInit() {
    this.womenproduct.getwomenProducts().subscribe((data)=>{this.WomenProductList=data;console.log(data);},(err)=>console.log(err));
 
  }
Details(item)
{
  this.router.navigate(['/WomenDetails',item.CategoryCard_ID]);
}

OnAddCart(item)
            {
              console.log(item);
              
              this.productAddedTocart=this.womenproduct.getProductFromCart();
              if(this.productAddedTocart==null)
              {
                this.productAddedTocart=[];
                this.productAddedTocart.push(item);
                this.womenproduct.addProductToCart(this.productAddedTocart);
              }
              else
              {
                let tempProduct=this.productAddedTocart.find(p=>p.CategoryCard_ID==item.CategoryCard_ID);
                if(tempProduct==null)
                {
                  this.productAddedTocart.push(item);
                  this.womenproduct.addProductToCart(this.productAddedTocart);
                }      
                  
              }
              console.log(this.cartItemCount);
              this.cartItemCount=this.productAddedTocart.length;
              // this.cartEvent.emit(this.cartItemCount);
              this.cartSharedService.updateCartCount(this.cartItemCount);
            }

}
