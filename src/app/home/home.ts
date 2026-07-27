import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {NgFor, NgIf} from '@angular/common';

import {ExpandableCard} from '../expandable-card/expandable-card';
import {PROJECTS, CATEGORY_LABELS} from '../projects.data';

@Component({
  selector: 'app-home',
  imports: [RouterLink, MatButtonModule, MatIconModule, NgFor, NgIf, ExpandableCard],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  protected readonly featured = PROJECTS.filter(p => p.featured);
  protected readonly labels = CATEGORY_LABELS;

  protected readonly services = [
    {
      icon: 'apps',
      title: 'Applications métiers sur mesure',
      summary:
        "Des interfaces Angular adaptées aux usages réels de vos équipes : back-office, portails, tableaux de bord, workflows.",
    },
    {
      icon: 'hub',
      title: 'Intégration de vos outils existants',
      summary:
        "Nous connectons vos APIs, logiciels métier, données bureautiques et services cloud au lieu de les isoler.",
    },
    {
      icon: 'auto_awesome',
      title: 'Automatisation des processus',
      summary:
        "Génération de planning, traitement de documents, collecte web, exports, synchronisation : vos tâches répétitives deviennent fiables.",
    },
    {
      icon: 'psychology',
      title: 'IA appliquée aux usages',
      summary:
        "Recommandation, analyse, génération de réponses, enrichissement de données : l'IA là où elle simplifie réellement le travail.",
    },
  ];
}
