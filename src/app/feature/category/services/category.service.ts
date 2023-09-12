import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddCategoryRequest } from '../models/add-category-request.model';
import { Company } from '../models/category.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  addCompanies(model: AddCategoryRequest): Observable<void>{
    return this.http.post<void>(`${environment.apibaseUrl}/api/Companies/Add`, model);
  }

  getAllCompanies(): Observable<Company[]>{
    return this.http.get<Company[]>(`${environment.apibaseUrl}/api/Companies`)
  }
}
