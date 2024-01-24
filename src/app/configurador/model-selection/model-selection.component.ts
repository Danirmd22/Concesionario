import { Component, OnInit } from '@angular/core';
import { ModelService } from './service/models.service';
import { Model } from './interfaces/model.interface';

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