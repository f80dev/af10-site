import {Component, OnInit, inject, signal, computed} from '@angular/core';
import {RouterLink} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {DatePipe} from '@angular/common';

import {PostService} from '../post.service';

@Component({
  selector: 'app-blog',
  imports: [RouterLink, MatButtonModule, MatChipsModule, MatIconModule, DatePipe],
  templateUrl: './blog.html',
  styleUrl: './blog.scss',
})
export class Blog implements OnInit {
  private postService = inject(PostService);

  protected readonly posts = this.postService.all;
  protected readonly tags = this.postService.tags;
  protected readonly isLoaded = this.postService.isLoaded;
  protected readonly loadError = this.postService.loadError;
  protected readonly activeTag = signal<string | null>(null);

  protected readonly visible = computed(() => {
    const tag = this.activeTag();
    const all = this.posts();
    return tag ? all.filter(p => p.tags.includes(tag)) : all;
  });

  ngOnInit() {
    this.postService.load();
  }

  selectTag(tag: string | null) {
    this.activeTag.set(tag);
  }
}
