import { Component, OnDestroy } from '@angular/core';
import { AddCategoryRequest } from '../models/add-category-request.model';
import { CategoryService } from '../services/category.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnDestroy{

  model: AddCategoryRequest;
  private addcategorysubscription?: Subscription
  
  constructor(private categoryservice: CategoryService,
    private router: Router) {
    this.model = {
      companyId: 0,
      companyName: ''
    }
  }

  onFormSubmit(){
    this.addcategorysubscription = this.categoryservice.addCompanies(this.model)
    .subscribe({
      next: (response)=>{
        this.router.navigateByUrl('/admin/categories')
      }
    })
  }

  ngOnDestroy(): void {
    this.addcategorysubscription?.unsubscribe();
  }
}
