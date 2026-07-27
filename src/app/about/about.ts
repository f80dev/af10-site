import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {ExpandableCard} from '../expandable-card/expandable-card';

@Component({
  selector: 'app-about',
  imports: [RouterLink, MatButtonModule, ExpandableCard],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  protected readonly values = [
    {
      icon: 'engineering',
      title: 'Expérience d\'ingénierie',
      summary:
        "Une pratique de l'ingénierie logicielle forgée sur des projets métiers réels : Angular, Python, intégration, données.",
    },
    {
      icon: 'insights',
      title: 'Expertise données',
      summary:
        "Capacité à structurer, normaliser et exploiter des données hétérogènes : API, fichiers, données ouvertes, GED.",
    },
    {
      icon: 'school',
      title: 'Connaissance des environnements culturels et éducatifs',
      summary:
        "Plusieurs années d'intervention auprès d'établissements culturels (CNSMDP, ENSAD, FEMIS, SNL) et d'enseignements spécialisés.",
    },
    {
      icon: 'workspaces',
      title: 'Capacité full-stack',
      summary:
        "Du front-end Angular 21 à l'API Python en passant par les bases de données et l'intégration aux services cloud.",
    },
  ];
}
