import { Component, inject, input } from '@angular/core';
import { Blog } from '@app/models/interfaces';
import { BlogService } from '@app/services/blog.service';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent {
  blogs = input.required<Blog[]>();
}
