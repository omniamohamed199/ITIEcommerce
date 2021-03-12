import { Component, OnInit } from '@angular/core';
import { Categorycard } from 'src/app/ProductComponent/mainproduct/categorycard';
import { MainProductService } from 'src/services/main-product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  dafualtQuantity:number=1;
  productAddedTocart:Categorycard[]=[];
  allTotal:number;
 
  constructor(private cartService:MainProductService) { }

  ngOnInit() {
    this.productAddedTocart=this.cartService.getProductFromCart();
    for (let i in this.productAddedTocart) {
      this.productAddedTocart[i].CategoryCard_Quantity=1;
  }
  
  this.cartService.removeAllProductFromCart();
   this.cartService.addProductToCart(this.productAddedTocart);
   this.calculteAllTotal(this.productAddedTocart);

}
calculteAllTotal(allItems:Categorycard[])
  {
    let total=0;
    for (let i in allItems) {
      total= total+(allItems[i].CategoryCard_Quantity * allItems[i].CategoryCard_Price_Unit);
   }
   this.allTotal=total;
  }
  onAddQuantity(product:Categorycard)
  {
  
    this.productAddedTocart=this.cartService.getProductFromCart();
    this.productAddedTocart.find(p=>p.CategoryCard_ID==product.CategoryCard_ID).CategoryCard_Quantity= product.CategoryCard_Quantity+1;
    this.cartService.removeAllProductFromCart();
  this.cartService.addProductToCart(this.productAddedTocart);
  this.calculteAllTotal(this.productAddedTocart);
 
   
  }
  onRemoveQuantity(product:Categorycard)
  {
    this.productAddedTocart=this.cartService.getProductFromCart();
    this.productAddedTocart.find(p=>p.CategoryCard_ID==product.CategoryCard_ID).CategoryCard_Quantity= product.CategoryCard_Quantity-1;
    this.cartService.removeAllProductFromCart();
    this.cartService.addProductToCart(this.productAddedTocart);
    this.calculteAllTotal(this.productAddedTocart);
    

  }
}
