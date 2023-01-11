import {Component} from "@angular/core";
import {ProductService} from "../../services/product.service";
import {data} from "autoprefixer";
@Component
({
  selector: 'app-product',
  templateUrl:'./product.component.html'

})

export class ProductComponent
{
  constructor(private productService:ProductService) {this.GetProducts()
  }

  GetProducts()
  {
    this.productService.getProduct().subscribe((data:any) => {
      console.log(data)
    })
  }
}
