import {Component, Input} from '@angular/core';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-static-page',
  imports: [NgIf],
  templateUrl: './static-page.html',
  styleUrl: './static-page.scss',
})
export class StaticPage {
  @Input() title = '';
  @Input() updated = '';
}
