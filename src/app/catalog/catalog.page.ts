import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/API/products.service';
import { Producto } from '../interfaces/Producto';
import { ViewWillEnter } from '@ionic/angular';


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.page.html',
  styleUrls: ['./catalog.page.scss'],
})
export class CatalogPage implements ViewWillEnter {
  public productos! : Producto[];

  constructor(
    private ps :ProductsService
  ) { }

ionViewWillEnter(): void {
  this.ps.getProductos().subscribe(
    (response) => {
      this.productos = response.products
    },
    (error) => {
      console.error('Error al cargar productos:', error);
    }
  );
}

}
