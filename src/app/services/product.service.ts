import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) {}

  getProduct()
  {
    let url = '/v1/product/get-all-products'
    return this.http.get(url);
  }



}
