import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import {ProductoRespuesta} from 'src/api/interfaces/ProductoRespuesta'
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private readonly URL = 'https://dummyjson.com/auth/products';
  public productos: ProductoRespuesta;
  constructor(
    private http : HttpClient,
    private auth : AuthService

  ) { }

  public listarProductos(){
    const requestheaders: string|null = this.auth.getToken()
    this.http.get<ProductoRespuesta>(this.URL,{
      headers:{
        'Authorization' : 'Bearer' +requestheaders
      }
    }).subscribe(response =>{
      response.
    }
    )
  }


}
