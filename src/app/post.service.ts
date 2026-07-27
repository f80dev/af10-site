import {Injectable, inject, signal, computed} from '@angular/core';
import {HttpClient} from '@angular/common/http';

export interface Post {
  slug: string;
  title: string;
  date: string;
  author: string;
  tags: string[];
  excerpt: string;
  html: string;
}

@Injectable({providedIn: 'root'})
export class PostService {
  private http = inject(HttpClient);

  private posts = signal<Post[]>([]);
  private loaded = signal(false);
  private error = signal<string | null>(null);

  /** All posts sorted by date desc. Empty until load() is called. */
  readonly all = computed(() => [...this.posts()].sort((a, b) => b.date.localeCompare(a.date)));

  /** Latest post, for the home page teaser. */
  readonly latest = computed(() => this.all()[0]);

  /** All distinct tags across posts. */
  readonly tags = computed(() => {
    const set = new Set<string>();
    for (const p of this.posts()) for (const t of p.tags) set.add(t);
    return Array.from(set).sort();
  });

  /** Public error state for templates. */
  readonly loadError = this.error.asReadonly();
  readonly isLoaded = this.loaded.asReadonly();

  /** Loads posts.json once and caches them in the signal. */
  load(): void {
    if (this.loaded()) return;
    this.http.get<Post[]>('assets/posts.json').subscribe({
      next: data => {
        this.posts.set(data);
        this.loaded.set(true);
        this.error.set(null);
      },
      error: () => {
        this.error.set('Impossible de charger les articles.');
      },
    });
  }

  getBySlug(slug: string): Post | undefined {
    return this.posts().find(p => p.slug === slug);
  }
}
