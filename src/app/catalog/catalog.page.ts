import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/API/products.service';
import { Producto } from '../interfaces/Producto';
import { ViewWillEnter } from '@ionic/angular';
import { InfiniteScrollCustomEvent } from '@ionic/angular';


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.page.html',
  styleUrls: ['./catalog.page.scss'],
})
export class CatalogPage implements ViewWillEnter {
  public productos! : Producto[];
  private skip = 0;
  private limit = 20;

  constructor(
    private ps :ProductsService
  ) { }

  cargar(event?:InfiniteScrollCustomEvent) {
    if (this.skip >= 194) {
      if (event) {
        event.target.disabled = true; 
        event.target.complete();
      }
      return;
    }
  
    this.ps.getProductos(this.skip, this.limit).subscribe(
      (response) => {
        if (response.products.length > 0) {
          this.productos = response.products;
          this.skip += this.limit;
        } 
        
        if (event) {
          event.target.complete();
        }
      },
      (error) => {
        console.error('Error al cargar productos:', error);
        if (event) {
          event.target.complete();
        }
      }
    );
  }
  
  onIonInfinite(event:InfiniteScrollCustomEvent) {
    this.cargar(event);
  }
  

ionViewWillEnter(): void {
  this.cargar()
}

}