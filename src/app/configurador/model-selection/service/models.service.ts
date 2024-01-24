import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Model } from '../interfaces/model.interface';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ModelService {
  public ModelList: Model[] = [];

  constructor(private http: HttpClient) {
    console.log('Models Service Ready');
  }

  private serviceUrl = "https://concesionario.up.railway.app/api/v1/brands/1/models"

  getModels(): Observable<Model[]> {
    return this.http.get<Model[]>(this.serviceUrl);
  }
}