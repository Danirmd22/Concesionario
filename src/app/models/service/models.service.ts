import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Model } from '../interfaces/model.interface';

@Injectable({ providedIn: 'root' })
export class ModelService {
  public ModelList: Model[] = [];

  constructor(private http: HttpClient) {
    console.log('Models Service Ready');
  }

  private serviceUrl = "https://concesionario.up.railway.app/api/v1/models"

  getModels(): Observable<Model[]> {
    return this.http.get<Model[]>(this.serviceUrl);
  }

  getModelsByBrand(): Observable<Model[]> {
    return this.http.get<Model[]>(this.serviceUrl);
  }
}