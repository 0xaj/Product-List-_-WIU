import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class GetProductService {

  baseURL : string =  'http://localhost/PRoduct/';

  constructor(private http: HttpClient, private router: Router) { }

    getAllProducts(){
      let data:  any;
      return this.http.get(this.baseURL+'getProducts.php')
      .pipe(
        map((res: Response)=>res)
      );
      // data  = this.http.get('http://localhost/PRoduct/getProducts.php');
      //   console.log(d);
      // return data;
        
        
    }

    getCommentsById(pid:any){
      return this.http.get(this.baseURL+'getComment.php?product_id='+pid)
      .pipe(
        map((res : Response) => res)
      );
    }

    postComments(model: any){
        return this.http.post(this.baseURL+'insertComment.php',model)
        .pipe(
          map((res:Response)=> res)
        );
    }

    deleteComment(comment_id: any){
      console.log(comment_id);
      return this.http.get(this.baseURL+'deleteComment.php?comment_id='+comment_id)
      .pipe(
        map((res:Response)=> res)
      );
  }
}
