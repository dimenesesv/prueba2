import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { ProductoRespuesta } from 'src/app/interfaces/ProductoRespuesta';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private readonly URL = 'https://dummyjson.com/auth/products';
  public productos!: ProductoRespuesta;
  constructor(
    private http : HttpClient,
    private auth : AuthService

  ) { }

  public getProductos() {
    const requestheaders: string | null = this.auth.token;
    return this.http.post<ProductoRespuesta>(this.URL, {
      headers: {
        'Authorization': 'Bearer ' + requestheaders,
        'Content-type': 'application/json'
      }
    });
  }
  


}
