import { Component } from '@angular/core';
import { BrandService } from '../../service/brands.service';
import { Brand } from '../../interfaces/brand.interface';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css'
})

export class CardListComponent {

  constructor( private brandsService: BrandService) {}

  get brands() {
    return this.brandsService.getBrands;
  }

}
