import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {NgFor} from '@angular/common';
import {ExpandableCard} from '../expandable-card/expandable-card';

@Component({
  selector: 'app-services',
  imports: [RouterLink, MatButtonModule, MatIconModule, NgFor, ExpandableCard],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {
  protected readonly items = [
    {
      icon: 'lightbulb',
      title: 'Conseil et cadrage',
      summary:
        "Audit des processus, identification des irritants, cartographie des outils, priorisation, étude de faisabilité.",
      details: [
        "Atelier de cadrage avec les équipes métier et IT",
        "Cartographie des outils, données et processus",
        "Étude de faisabilité technique et économique",
        "Plan de mise en œuvre progressive",
      ],
    },
    {
      icon: 'developer_mode',
      title: "Développement d'applications métiers",
      summary:
        "Applications Angular sur mesure : back-office, portails, tableaux de bord, outils internes, interfaces de gestion.",
      details: [
        "Front-end Angular 21 / Material 21",
        "Composants standalone, signals, TypeScript strict",
        "API REST ou GraphQL",
        "Mode connecté ou offline (PWA)",
      ],
    },
    {
      icon: 'sync_alt',
      title: 'Intégration de systèmes',
      summary:
        "Connexion à vos APIs, logiciels métier, Google Workspace, données bureautiques, services cloud.",
      details: [
        "Connecteurs Google Workspace (Sheets, Drive, Calendar, Tasks)",
        "Intégration aux ERP, CRM, logiciels de scolarité",
        "Imports/exports Office (xlsx, docx)",
        "Synchronisation de données entre systèmes",
      ],
    },
    {
      icon: 'memory',
      title: 'Automatisation et IA',
      summary:
        "Collecte, extraction, recommandation, planification, assistants, génération de contenus et de réponses.",
      details: [
        "Agents IA spécialisés (analyse, recommandation, génération)",
        "Collecte et structuration automatique de données",
        "Planification sous contraintes",
        "Intégration LLM via API ou auto-hébergée",
      ],
    },
    {
      icon: 'handyman',
      title: 'Maintenance et évolution',
      summary:
        "Correction, amélioration, ajout de fonctionnalités, migration, modernisation, accompagnement des utilisateurs.",
      details: [
        "Corrections et évolutions continues",
        "Modernisation progressive d'applications existantes",
        "Migration de stack technique",
        "Support utilisateurs et formation",
      ],
    },
  ];
}
