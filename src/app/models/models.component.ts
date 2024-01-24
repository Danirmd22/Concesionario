import { Component, OnInit } from '@angular/core';
import { Model } from './interfaces/model.interface';
import { ModelService } from './service/models.service';

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
})

export class ModelsComponent implements OnInit{
  models: Model[] = [];

  constructor(public modelService: ModelService) {}

  ngOnInit(): void {
    this.modelService.getModels().subscribe((models: Model[]) => {
      this.models = models;
      console.log(this.models);
    });
  }
}
