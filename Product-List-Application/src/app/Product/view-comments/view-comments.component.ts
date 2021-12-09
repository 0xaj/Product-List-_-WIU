import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { GetProductService } from 'src/app/services/get-product.service';
//import { GetProductService } from 'src/app/services/get-product.service';

@Component({
  selector: 'app-view-comments',
  templateUrl: './view-comments.component.html',
  styleUrls: ['./view-comments.component.css']
})
export class ViewCommentsComponent implements OnInit {

  displayedColumns: string[] = ['Comments','Delete'];
  dataSource : MatTableDataSource<any>;

  @ViewChild(MatPaginator)  paginator: MatPaginator;
  @ViewChild(MatSort)  sort: MatSort;


  constructor(private appservice: GetProductService) { }
  output:any = [];
  productid: any;
  title: any;
  description: any;
  price: any;
  comments: any=[];
  model: any = {};
  prodimage: any; 


  ngOnInit(): void {
    this.output = sessionStorage.getItem('productData');
    console.log(JSON.parse(this.output));
    this.title = JSON.parse(this.output).title;
    this.description = JSON.parse(this.output).description;
    this.productid = JSON.parse(this.output).pid;
    this.getCommentsById();
    this.prodimage = "/assets/"+this.productid+".jpg";
    this.price = JSON.parse(this.output).price;

  }

  getCommentsById(){

   
    var data  = [
      {
        pid: this.productid,
        message:'Awesome',
        id:1
        
      },
      {
        pid: this.productid,
        message:'Nice',
        id:2
        
      }
    ]
      this.comments = data;
      this.dataSource = new MatTableDataSource(this.comments);
      this.dataSource.sort = this.sort;
      this.comments= data.map((data: any)=> data.message);
      this.dataSource.paginator = this.paginator;

    // this.appservice.getCommentsById(JSON.parse(this.output).pid).subscribe((data: any) =>{
    //   console.log(data);
    //   this.comments = data;
    //   this.dataSource = new MatTableDataSource(this.comments);
    //   this.dataSource.sort = this.sort;
    //   //this.comments= data.map((data: any)=> data.message);
    //   // this.products = data;
    //   // this.dataSource = new MatTableDataSource(this.products);
    //   // this.dataSource.sort = this.sort;
    //   // this.dataSource.paginator = this.paginator;
    // })
  }

  postComment(){

    
    this.model.pid = this.productid;
    var data  = [
      {
        pid: this.productid,
        message:'Cool',
        id:1
        
      },
    
    ]
      this.comments = data;
      this.dataSource = new MatTableDataSource(this.comments);
      this.dataSource.sort = this.sort;
      this.comments= data.map((data: any)=> data.message);
      this.dataSource.paginator = this.paginator;

  
    // this.appservice.postComments(this.model).subscribe((data:any)=>{
    //   this.getCommentsById();
    //   // if(data=="success"){
    //   //   console.log(data);
    //   // }
    // })

    
  }

  deleteComment(row){

    // delete this.comments[row.id];
    let data =[]  
    console.log(this.comments.id+" "+row.id);
    this.comments = data;
      this.dataSource = new MatTableDataSource(this.comments);
      this.dataSource.sort = this.sort;
      this.comments= data.map((data: any)=> data.message);
      this.dataSource.paginator = this.paginator;
    // this.appservice.deleteComment(row.id).subscribe((data:any)=>{
    //   this.getCommentsById();
    //   // if(data=="success"){
    //   //   console.log(data);
    //   // }
    // })
    
  }

}

