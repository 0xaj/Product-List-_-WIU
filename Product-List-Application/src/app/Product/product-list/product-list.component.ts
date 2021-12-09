import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { GetProductService } from '../../services/get-product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit,AfterViewInit {

  displayedColumns: string[] = ['PID', 'Title','Description', 'Price','Comments'];
  dataSource : MatTableDataSource<any>;

  @ViewChild(MatPaginator)  paginator: MatPaginator;
  @ViewChild(MatSort)  sort: MatSort;

  constructor(
    private router : Router,
    private appservie : GetProductService
  ) { 
  }
  products: any = [];


  ngOnInit():void{
    this.getAllproducts();
  }

  getAllproducts(){


    var temp  = [
      {
        pid: 1,
        image: '1',
        title:'Charger',
        description:'Apple 20W USB-C Power Adapter',
        price:300
      },
      {
        pid: 2,
        image: '2',
        title:'Java Book',
        description:'All about Java',
        price:450
      },
      {
        pid: 3,
        image: '3',
        title:'Pen',
        description:'Stylish Pen',
        price:300
      }
    ]
    this.products = temp;
      console.log(this.products);
      this.dataSource = new MatTableDataSource(this.products);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;


    // this.appservie.getAllProducts().subscribe((data: any) =>{
    //   this.products = data;
    //   console.log(this.products);
    //   this.dataSource = new MatTableDataSource(this.products);
    //   this.dataSource.sort = this.sort;
    //   this.dataSource.paginator = this.paginator;
    // })

        }
        

      
  

  passProductData(row: any){ // data  = this.http.get('http://localhost/PRoduct/getProducts.php');
    //   console.log(d);
    // return data;
    sessionStorage.setItem('productData',JSON.stringify(row));
    this.router.navigate(['/viewcomment'], {state: {item:row}});
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

   
  }
}

