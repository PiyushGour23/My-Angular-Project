import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CategoryService } from '../services/category.service';
import { Company } from '../models/category.model';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit, OnDestroy{
  companyId: string | null = null;
  paramsSubscription?: Subscription;
  company?: Company;

  constructor (private route: ActivatedRoute, 
    private categoryService: CategoryService)
  {

  }

  ngOnInit(): void {
    this.paramsSubscription = this.route.paramMap.subscribe({
      next: (params) => {
        this.companyId = params.get('companyId');

        if(this.companyId)
        {
          //get the data from API for this category
          this.categoryService.getCompanyById(this.companyId)
          .subscribe({
            next: (response) =>{
              this.company = response;
            }
          });
        }
    }
  });
  }
  ngOnDestroy(): void {
    this.paramsSubscription?.unsubscribe();
  }
}
