import { Component } from '@angular/core';
import { BrandService } from '../service/brands.service';
@Component({
  selector: 'app-brand-page',
  templateUrl: './brand-page.component.html',
  styleUrl: './brand-page.component.css'
})
export class BrandPageComponent {

  constructor(public brandsService: BrandService) {}


}
