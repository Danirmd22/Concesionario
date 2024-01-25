import { ModelService } from './../../../../models/service/models.service';
import { Component, Input, } from '@angular/core';
import { Brand } from '../../interfaces/brand.interface';
import { Model } from '../../../../models/interfaces/model.interface';


@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})

export class CardListComponent {
  models: Model[] = [];
  selectedBrandId: number | null = null;

  constructor(
    public modelService: ModelService
    ) {
  }
  @Input()
  public Brands: Brand[] = [];

  onBrandSelected(idMarca: number) {
    this.selectedBrandId = idMarca;
    this.modelService.getModelsByBrand(idMarca).subscribe(models => {
      this.models = models;
      console.log(this.models); // Mover aquí
    });
  }
}
