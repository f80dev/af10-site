import {Component, Input, signal} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-expandable-card',
  imports: [MatIconModule, MatButtonModule, NgIf],
  templateUrl: './expandable-card.html',
  styleUrl: './expandable-card.scss',
})
export class ExpandableCard {
  @Input() title = '';
  @Input() summary = '';
  @Input() icon = '';
  /** If true, the card opens flipped on first render. */
  @Input() defaultOpen = false;

  protected open = signal(false);

  constructor() {
    if (this.defaultOpen) this.open.set(true);
  }

  toggle(): void {
    this.open.update((v: boolean) => !v);
  }
}