import { Component, OnInit } from '@angular/core';
import { Categorycard } from 'src/app/ProductComponent/mainproduct/categorycard';
import { MainProductService } from 'src/services/main-product.service';
import { Router } from '@angular/router';
import { SharedService } from 'src/services/shared.service';

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css']
})
export class MenComponent implements OnInit {

  menProductList:Categorycard[]=[];
  productAddedTocart:Categorycard[];
cartItemCount: number = 0;

  constructor(private menproduct:MainProductService , private router:Router,private cartSharedService:SharedService ) {
   
  }

  ngOnInit() {
    this.menproduct.getmenProducts().subscribe((data)=>{this.menProductList=data;console.log(data);},(err)=>console.log(err));
 
  }
// Details(item)
// {
//   this.router.navigate(['/menDetails',item.CategoryCard_ID]);
// }

OnAddCart(item)
            {
              console.log(item);
              
              this.productAddedTocart=this.menproduct.getProductFromCart();
              if(this.productAddedTocart==null)
              {
                this.productAddedTocart=[];
                this.productAddedTocart.push(item);
                this.menproduct.addProductToCart(this.productAddedTocart);
              }
              else
              {
                let tempProduct=this.productAddedTocart.find(p=>p.CategoryCard_ID==item.CategoryCard_ID);
                if(tempProduct==null)
                {
                  this.productAddedTocart.push(item);
                  this.menproduct.addProductToCart(this.productAddedTocart);
                }      
                  
              }
              console.log(this.cartItemCount);
              this.cartItemCount=this.productAddedTocart.length;
              // this.cartEvent.emit(this.cartItemCount);
              this.cartSharedService.updateCartCount(this.cartItemCount);
            }

}
