import { Component, Input, } from '@angular/core';
import { BrandService  } from '../../service/brands.service';
import { Brand } from '../../interfaces/brand.interface';


@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})

export class CardListComponent {
  constructor(private brandsService: BrandService) {}
  @Input()
  public Brands: Brand[] = [];
}