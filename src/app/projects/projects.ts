import {Component, signal, computed} from '@angular/core';
import {RouterLink} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatChipsModule} from '@angular/material/chips';
import {NgFor, NgIf} from '@angular/common';

import {ExpandableCard} from '../expandable-card/expandable-card';
import {PROJECTS, CATEGORY_LABELS} from '../projects.data';
import {ProjectCategory} from '../tools';

@Component({
  selector: 'app-projects',
  imports: [RouterLink, MatButtonModule, MatIconModule, MatChipsModule, NgFor, ExpandableCard],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  protected readonly labels = CATEGORY_LABELS;
  protected readonly all = PROJECTS;
  protected readonly activeCategory = signal<ProjectCategory | 'all'>('all');

  protected readonly categories: (ProjectCategory | 'all')[] = [
    'all', 'scolarite', 'culture', 'crm', 'ia', 'automatisation', 'donnees', 'geospatial',
  ];

  protected readonly visible = computed(() => {
    const cat = this.activeCategory();
    if (cat === 'all') return this.all;
    return this.all.filter(p => p.category === cat);
  });

  setCategory(cat: ProjectCategory | 'all') {
    this.activeCategory.set(cat);
  }
}
