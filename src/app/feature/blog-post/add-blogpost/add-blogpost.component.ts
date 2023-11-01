import { Component } from '@angular/core';
import { AddBlogPost } from '../models/add-blog-post.model';
import { BlogPostService } from '../services/blog-post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-blogpost',
  templateUrl: './add-blogpost.component.html',
  styleUrls: ['./add-blogpost.component.css']
})
export class AddBlogpostComponent {
  model: AddBlogPost;

  constructor(private blogpostservice: BlogPostService,
    private router: Router ){
    this.model = {
      title: '',
      shortDescription: '',
      urlHandle: '',
      content: '',
      featuredImageUrl: '',
      author: '',
      isVisible: true,
      publishDate: new Date()
    }
  }

  onFormSubmit(): void{
  //   console.log(this.model);
  // }
    this.blogpostservice.createBlogpost(this.model)
    .subscribe({
      next: (response) => {
        this.router.navigateByUrl('/admin/blogpost');
      }
    });
  }
}
