import {Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {NgFor} from '@angular/common';
import {ExpandableCard} from '../expandable-card/expandable-card';

@Component({
  selector: 'app-sectors',
  imports: [MatButtonModule, MatIconModule, NgFor, ExpandableCard],
  templateUrl: './sectors.html',
  styleUrl: './sectors.scss',
})
export class Sectors {
  protected readonly items = [
    {
      icon: 'school',
      title: 'Enseignement et gestion de scolarité',
      summary:
        "Établissements supérieurs, conservatoires, écoles spécialisées : planification, exports, intégration au système de scolarité existant.",
      problems: [
        "Gestion des étudiants, plannings, salles, enseignants",
        "Exports et documents administratifs",
        "Intégration avec un système de scolarité déjà en place",
      ],
      projects: ['OasisTools', 'AutoPlanning', 'Data Culture Pro'],
    },
    {
      icon: 'museum',
      title: 'Culture et institutions',
      summary:
        "Conservatoires, écoles d'art, institutions culturelles : processus spécifiques, données dispersées, besoin d'évolutivité.",
      problems: [
        "Processus spécifiques à chaque institution",
        "Données dispersées entre plusieurs outils",
        "Besoin d'outils adaptés et non génériques",
      ],
      projects: ['Data Culture Pro — CNSMDP / ENSAD / FEMIS / SNL'],
    },
    {
      icon: 'support_agent',
      title: 'Relation client et professions de services',
      summary:
        "Cabinets, professionnels libéraux, services B2B : gestion des rendez-vous, tâches, suivi des clients, centralisation de l'information.",
      problems: [
        "Gestion des rendez-vous et des tâches",
        "Suivi des clients / patients",
        "Centralisation de l'information",
      ],
      projects: ['EmilieThérapie', 'TherAssist', 'Social Assistant'],
    },
    {
      icon: 'dataset',
      title: 'Données et automatisation',
      summary:
        "Collecte, normalisation, transformation, export, recherche, enrichissement IA.",
      problems: [
        "Collecte de données web ou métier",
        "Normalisation et structuration",
        "Recherche et enrichissement par IA",
      ],
      projects: ['Page Semantic Extractor', 'RandoGPX', 'AutoPlanning'],
    },
  ];
}
