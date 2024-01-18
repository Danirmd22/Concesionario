import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BrandResponse, Brand } from '../interfaces/brand.interface';

@Injectable({ providedIn: 'root' })
export class BrandService {
  public brandList: Brand[] = [];

  constructor( private http: HttpClient ) {
    console.log('Brands Service Ready');
  }

  private serviceUrl = "https://concesionario.up.railway.app/api/v1/brands"

  getBrands(): void {
    this.http.get<BrandResponse>(`${ this.serviceUrl }`)
      .subscribe( resp => {

        this.brandList = resp.brand;
        console.log({ brands: this.brandList });

      });
  }

}


