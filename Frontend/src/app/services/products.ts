import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { Product } from '../types/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:4000/productos';

  obtenerProductos(): Observable<Product[]> {
    return this.http.get<{ info: any; results: Product[] }>(this.apiUrl).pipe(
      map((productos) => productos.results),
      catchError((error) => {
        console.log(error);
        return of([]);
      })
    );
  }
}
