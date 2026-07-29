import {Injectable, signal, effect, inject, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser, DOCUMENT} from '@angular/common';

export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'af10-theme';

/**
 * ThemeService — controls the [data-theme] attribute on <html>.
 *
 * Resolution order:
 *   1. User choice persisted in localStorage (highest priority)
 *   2. Pre-colorscheme dark/light media query
 *   3. Default to 'light'
 *
 * The toggle UI in the header calls set() to flip the mode.
 * Persists across reloads via localStorage.
 */
@Injectable({providedIn: 'root'})
export class ThemeService {
  private readonly PLATFORM_ID = inject(PLATFORM_ID);
  private readonly doc = inject(DOCUMENT);

  /** Current theme as a signal — for reactive consumers. */
  readonly theme = signal<Theme>(this.detect());

  constructor() {
    // Apply the resolved theme to <html> on boot and whenever it changes.
    effect(() => {
      const t = this.theme();
      if (isPlatformBrowser(this.PLATFORM_ID)) {
        this.doc.documentElement.setAttribute('data-theme', t);
      }
    });

    // Listen to OS-level changes only if the user has NOT explicitly chosen.
    if (isPlatformBrowser(this.PLATFORM_ID)) {
      const mq = window.matchMedia('(prefers-color-scheme: dark)');
      const onChange = (e: MediaQueryListEvent) => {
        if (this.doc.defaultView?.localStorage.getItem(STORAGE_KEY)) return;
        this.theme.set(e.matches ? 'dark' : 'light');
      };
      mq.addEventListener('change', onChange);
    }
  }

  /** Toggle between light and dark. */
  toggle(): void {
    this.set(this.theme() === 'dark' ? 'light' : 'dark');
  }

  /** Set a specific theme and persist the choice. */
  set(t: Theme): void {
    this.theme.set(t);
    if (isPlatformBrowser(this.PLATFORM_ID)) {
      try {
        this.doc.defaultView?.localStorage.setItem(STORAGE_KEY, t);
      } catch {
        // localStorage unavailable (private mode, quota) — silently skip.
      }
    }
  }

  private detect(): Theme {
    if (!isPlatformBrowser(this.PLATFORM_ID)) return 'dark';
    try {
      const stored = this.doc.defaultView?.localStorage.getItem(STORAGE_KEY);
      if (stored === 'dark' || stored === 'light') return stored;
    } catch { /* ignore */ }
    // Dark mode is the default at the application level.
    // The OS-level prefers-color-scheme is still honoured on first visit
    // (so a light-only user on a non-dark system still sees light),
    // but when the OS reports "no preference" we now default to dark.
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    if (mq.matches) return 'dark';
    if (mq.media === '(prefers-color-scheme: light)') return 'light';
    // No media-query support at all → dark.
    return 'dark';
  }
}
