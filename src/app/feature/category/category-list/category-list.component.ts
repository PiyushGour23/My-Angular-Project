import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Company } from '../models/category.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  companies?: Company[];
  companies$?: Observable<Company[]>;
  constructor(private categoryservice: CategoryService){
    
  }



  ngOnInit(): void {

    this.companies$ = this.categoryservice.getAllCompanies();
    this.categoryservice.getAllCompanies()

    // .subscribe({
    //   next: (response) =>{
    //     this.companies = response
    //   }
    // });
  }

}
