import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { Items } from 'src/app/models/items';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  items: Items[] = [];

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts().subscribe(items => {
      this.items = items;
    });
  }

  viewItemDetails(id: number): void {
    this.router.navigateByUrl(`/products/${id}`);
  }

  editItem(id: number): void {
    this.router.navigateByUrl(`/edit/${id}`);
  }

  deleteItem(id: number): void {
    this.productService.deleteProduct(id).subscribe(() => {
      this.items = this.items.filter(item => item.id !== id);
    });
  }
}