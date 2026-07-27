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
  /** Body content is rendered only when the card is expanded. */
  @Input() defaultOpen = false;

  protected open = signal(false);

  toggle() {
    this.open.update(v => !v);
  }
}
