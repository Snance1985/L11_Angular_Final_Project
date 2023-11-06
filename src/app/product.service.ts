import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Items } from 'src/app/models/items';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'http://localhost:4200/items';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Items[]> {
    return this.http.get<Items[]>(this.baseUrl);
  }

  getProductById(id: number): Observable<Items> {
    return this.http.get<Items>(`${this.baseUrl}/${id}`);
  }

  addProduct(product: Items): Observable<Items> {
    return this.http.post<Items>(this.baseUrl, product);
  }

  updateProduct(product: Items): Observable<Items> {
    return this.http.put<Items>(`${this.baseUrl}/${product.id}`, product);
  }

  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}