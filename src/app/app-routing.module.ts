import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainproductComponent } from './ProductComponent/mainproduct/mainproduct.component';
import { WomenComponent } from './layouts/content/Women/women/women.component';
import { PageNotFoundComponent } from './layouts/content/page-not-found/page-not-found.component';
import { WomenDetailsComponent } from './layouts/content/Women/WomenDetails/women-details/women-details.component';
import { CartComponent } from './layouts/content/cart/cart.component';
import { SearchComponent } from './layouts/content/search/search.component';
import { MenComponent } from './layouts/content/men/men.component';

const routes: Routes = [
  {path:'home',component:MainproductComponent},
  {path:'Women',component:WomenComponent},
  {path:'men',component:MenComponent},
  {path:'WomenDetails/:CategoryCard_ID',component:WomenDetailsComponent},
  {path:'Cart',component:CartComponent},
  {path:'Search',component:SearchComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
