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

  private serviceUrl = "https://concesionario.up.railway.app/api/v1"

  getModels(): Observable<Model[]> {
    const url = `${this.serviceUrl}/models`;
    return this.http.get<Model[]>(url);
  }

  getModelsByBrand(idMarca: number): Observable<Model[]> {
    const url = `${this.serviceUrl}/brands/${idMarca}/models`;
    return this.http.get<Model[]>(url);
  }
}