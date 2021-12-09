import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MatTableModule} from '@angular/material/table'
import { MatPaginatorModule} from '@angular/material/paginator'
import { MatSortModule} from '@angular/material/sort'
import { MatIconModule} from '@angular/material/icon'
import { MatFormFieldModule} from '@angular/material/form-field';
import { ProductListComponent } from './Product/product-list/product-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { ViewCommentsComponent } from './Product/view-comments/view-comments.component';
import { HttpClientModule } from '@angular/common/http';
import {  MatIconRegistry } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ViewCommentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatIconModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatInputModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
