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

  public getProductos(skip: number, limit: number){
    console.log(this.auth.token)
    return this.http.get<ProductoRespuesta>(`${this.URL}?skip=${skip}&limit=${limit}`, {
      headers: {
        'Authorization': 'Bearer ' + this.auth.token,
        'Content-type': 'application/json'
      }
    });
  }
  


}
