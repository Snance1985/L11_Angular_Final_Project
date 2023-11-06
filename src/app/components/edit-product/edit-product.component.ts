import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/product.service'; 
import { Items } from 'src/app/models/items'; 

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
})
export class EditProductComponent {
  product: Items | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit() {
    const productId = +this.route.snapshot.paramMap.get('id')!;
    this.productService.getProductById(productId).subscribe((data) => {
      this.product = data;
    });
  }

  // Implement the logic for updating a product
  updateProduct(updatedProduct: Items) {
    this.productService.updateProduct(updatedProduct).subscribe(() => {
      this.router.navigate(['/products']);
    });
  }
}