import { Component } from '@angular/core'
import { BrandService } from './configurador/brand-selection/service/brands.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Concesionario';
  constructor(private brandService: BrandService) {}

  ngOnInit(): void {
    this.brandService.getBrands();
  }

}
