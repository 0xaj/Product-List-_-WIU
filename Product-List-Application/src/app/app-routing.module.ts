import { NgModule, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './Product/product-list/product-list.component';
import { ViewCommentsComponent } from './Product/view-comments/view-comments.component';

const routes: Routes = [
  {path: '',redirectTo: 'productlist', pathMatch: 'full'},
  {path : 'productlist', component: ProductListComponent} ,
  {path : 'viewcomment', component: ViewCommentsComponent}  
]

@NgModule({
  declarations: [],
  // imports: [
  //   CommonModule
  // ]
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
