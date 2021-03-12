import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categorycard } from 'src/app/ProductComponent/mainproduct/categorycard';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MainProductService {

  constructor(private httpclient:HttpClient) { 

  }
  getProducts():Observable<Categorycard[]>
  {
    return (this.httpclient
      .get<Categorycard[]>(`${environment.API_URL}Categorycard`));
  }

  getwomenProducts():Observable<Categorycard[]>
  {
    return (this.httpclient.get<Categorycard[]>(`${environment.API_URL}Categorycard/1`));
  }

  getwomenDetails(id):Observable<Categorycard>
  {
    return (this.httpclient.get<Categorycard>(`${environment.API_URL}details/${id}`))
  }

  addProductToCart(prodcuts: any) {
    localStorage.setItem("item", JSON.stringify(prodcuts));
  }
  getProductFromCart() {
    //return localStorage.getItem("Categorycard");
    return JSON.parse(localStorage.getItem('item'));
  }
  removeAllProductFromCart() {
    return localStorage.removeItem("item");
  }

getProductSearched(ProductName)
{
return (this.httpclient.get<Categorycard[]>(`${environment.API_URL}Detail/${ProductName}`))
}
getmenProducts():Observable<Categorycard[]>
{
  return (this.httpclient.get<Categorycard[]>(`${environment.API_URL}Categorycard/2`));
}
}
