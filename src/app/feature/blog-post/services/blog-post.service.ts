import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddBlogPost } from '../models/add-blog-post.model';
import { BlogPost } from '../models/blog-post.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlogPostService {

  constructor(private http: HttpClient) { }

  createBlogpost(model: AddBlogPost): Observable<BlogPost>
  {
    return this.http.post<BlogPost>(`${environment.apibaseUrl}/api/blogpost`, model);
  }
}
