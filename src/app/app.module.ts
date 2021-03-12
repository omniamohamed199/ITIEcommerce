import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header/header.component';
import { FooterComponent } from './layouts/footer/footer/footer.component';
import { ContentComponent } from './layouts/content/content.component';
import { MainproductComponent } from './ProductComponent/mainproduct/mainproduct.component';
import {HttpClientModule} from '@angular/common/http';
import { MainProductService } from 'src/services/main-product.service';
import { WomenComponent } from './layouts/content/Women/women/women.component';
import { PageNotFoundComponent } from './layouts/content/page-not-found/page-not-found.component';
import { WomenDetailsComponent } from './layouts/content/Women/WomenDetails/women-details/women-details.component';
import { CartComponent } from './layouts/content/cart/cart.component';
import {FormsModule} from '@angular/forms';
import { SearchComponent } from './layouts/content/search/search.component';
import { SearchPipe } from './layouts/content/PIPE/search.pipe';
import { MenComponent } from './layouts/content/men/men.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    MainproductComponent,
    WomenComponent,
    PageNotFoundComponent,
    WomenDetailsComponent,
    CartComponent,
    SearchComponent,
    SearchPipe,
    MenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [MainProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
