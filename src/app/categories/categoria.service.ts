import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  categoriasUrl: string

  constructor(private http: HttpClient) {
    this.categoriasUrl = `${environment.apiUrl}/categorias`;
  }

  listAll(): Promise<any> {
    return this.http.get(this.categoriasUrl).toPromise();
  }

}
