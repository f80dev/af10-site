import {Component, inject} from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {NgIf, NgFor} from '@angular/common';
import {signal} from '@angular/core';

import {getProjectBySlug} from '../projects.data';
import {CATEGORY_LABELS} from '../projects.data';

@Component({
  selector: 'app-project-detail',
  imports: [RouterLink, MatButtonModule, MatIconModule, NgIf, NgFor],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.scss',
})
export class ProjectDetail {
  private route = inject(ActivatedRoute);
  protected readonly labels = CATEGORY_LABELS;
  protected readonly project = signal(getProjectBySlug(this.route.snapshot.paramMap.get('slug') ?? ''));
}
