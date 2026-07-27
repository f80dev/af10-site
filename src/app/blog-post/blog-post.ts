import {Component, OnInit, inject, signal, computed} from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {DatePipe, NgIf, NgFor} from '@angular/common';

import {PostService} from '../post.service';

@Component({
  selector: 'app-blog-post',
  imports: [RouterLink, MatButtonModule, MatIconModule, DatePipe, NgIf, NgFor],
  templateUrl: './blog-post.html',
  styleUrl: './blog-post.scss',
})
export class BlogPost implements OnInit {
  private route = inject(ActivatedRoute);
  private postService = inject(PostService);
  private sanitizer = inject(DomSanitizer);

  private slug = signal<string>(this.route.snapshot.paramMap.get('slug') ?? '');

  protected readonly post = computed(() => this.postService.getBySlug(this.slug()));
  protected readonly safeHtml = computed<SafeHtml>(() => {
    const p = this.post();
    return this.sanitizer.bypassSecurityTrustHtml(p?.html ?? '');
  });

  ngOnInit() {
    this.postService.load();
  }
}
