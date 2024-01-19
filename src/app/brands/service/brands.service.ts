import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Brand } from '../interfaces/brand.interface';

@Injectable({ providedIn: 'root' })
export class BrandService {
  public brandList: Brand[] = [];

  constructor(private http: HttpClient) {
    console.log('Brands Service Ready');
  }

  private serviceUrl = "https://concesionario.up.railway.app/api/v1/brands"

  getBrands(): void {
    this.http.get<Brand[]>(this.serviceUrl)
      .subscribe((resp: Brand[]) => {
        console.log(resp); // Imprime la respuesta completa

        if (resp) {
          this.brandList = resp; // Asigna resp a brandList directamente
          console.log({ brands: this.brandList });
        } else {
          console.error('La respuesta del servidor es nula o indefinida');
        }
      }, error => {
        console.error('Error al obtener las marcas:', error);
      });
  }
}
