import { Component, OnInit } from '@angular/core';
import { Model } from '../../models/interfaces/model.interface';
import { ModelService } from '../../models/service/models.service';

@Component({
  selector: 'app-models-page',
  templateUrl: './model-selection.component.html',
})
export class ModelSelectionComponent implements OnInit {
  models: Model[] = [];

  constructor(public modelService: ModelService) {}

  ngOnInit(): void {
    this.modelService.getModels().subscribe((models: Model[]) => {
      this.models = models;
      console.log(this.models);
    });
  }
}