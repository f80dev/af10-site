import {Component, Input, signal, ElementRef, inject, AfterContentInit, OnDestroy, PLATFORM_ID} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {NgIf} from '@angular/common';
import {isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'app-expandable-card',
  imports: [MatIconModule, MatButtonModule, NgIf],
  templateUrl: './expandable-card.html',
  styleUrl: './expandable-card.scss',
})
export class ExpandableCard implements AfterContentInit {
  @Input() title = '';
  @Input() summary = '';
  @Input() icon = '';
  /** Body content is rendered as the verso (back face) of the flip card. */
  @Input() defaultOpen = false;

  protected open = signal(false);
  protected hasBack = signal(false);

  private host = inject(ElementRef<HTMLElement>);
  private platformId = inject(PLATFORM_ID);

  constructor() {
    if (this.defaultOpen) this.open.set(true);
  }

  ngAfterContentInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      this.hasBack.set(true);
      return;
    }
    // Detect projected content by inspecting the host element's children
    // that aren't part of the component's own template.
    // The `<ng-content>` slot renders inside `.ec-back-content`,
    // so we check whether that node has any rendered children.
    queueMicrotask(() => {
      const backSlot = this.host.nativeElement.querySelector('.ec-back-content');
      this.hasBack.set(Boolean(backSlot && backSlot.childElementCount > 0));
    });
  }

  toggle(): void {
    this.open.update((v: boolean) => !v);
  }
}
