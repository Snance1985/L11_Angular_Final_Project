import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/product.service'; 
import { Items } from 'src/app/models/items'; 

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent {
  constructor(
    private router: Router,
    private productService: ProductService
  ) {}

  // Implement the logic for adding a new product
  addProduct(newProduct: Items) {
    this.productService.addProduct(newProduct).subscribe(() => {
      this.router.navigate(['/products']);
    });
  }
}