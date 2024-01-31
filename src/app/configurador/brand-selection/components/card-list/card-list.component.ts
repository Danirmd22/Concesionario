import { ModelService } from './../../../../models/service/models.service';
import { Component, Input, } from '@angular/core';
import { Brand } from '../../interfaces/brand.interface';
import { Model } from '../../../../models/interfaces/model.interface';
import { SelectedBrandService } from '../../../services/selected-brand.service';
import { BrandService } from '../../service/brands.service';


@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})

export class CardListComponent {
  models: Model[] = [];
  selectedBrand: Brand | null = null;
  selectedBrandId: number | null = null;

  constructor(
    public modelService: ModelService,
    public selectedBrandService: SelectedBrandService,
    public brandService: BrandService,
    ) {
  }
  @Input()
  public Brands: Brand[] = [];

  onBrandSelected(idMarca: number | null) {
    if (idMarca === null) {
      console.error('idMarca es nulo');
      return;
    }

    const selectedBrand = this.Brands.find((brand) => brand.id === idMarca);
    if (selectedBrand !== undefined) {
      this.selectedBrandService.changeSelectedBrand(selectedBrand);
    } else {
      this.selectedBrandService.changeSelectedBrand(null);
    }

    this.selectedBrandId = idMarca;
    this.modelService.getModelsByBrand(idMarca).subscribe(models => {
      this.models = models;
      this.selectedBrandService.changeModels(models);
    });
  }
}
