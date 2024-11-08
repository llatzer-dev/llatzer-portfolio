import { BlogService } from '@app/services/blog.service';
import { Component, inject } from '@angular/core';
import { Blog } from '@app/models/interfaces';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent {
  private blogService = inject(BlogService);

  public blogs: Blog[] = [];

  ngOnInit(): void {
    this.blogs = this.blogService.getBlogs();
  }
}
