import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {ExpandableCard} from '../expandable-card/expandable-card';

@Component({
  selector: 'app-method',
  imports: [RouterLink, MatButtonModule, ExpandableCard],
  template: `
    <div class="container">
      <h1>Notre méthode</h1>
      <p class="lead">
        Quatre étapes pour transformer un besoin en outil opérationnel,
        sans repartir de zéro.
      </p>

      <app-expandable-card title="1. Comprendre" icon="search"
                            summary="Analyse des objectifs, utilisateurs, outils existants et irritants.">
        <p>Nous prenons le temps d'observer comment l'organisation fonctionne
           réellement : qui fait quoi, avec quels outils, quelles données, quelles
           frictions. Cette phase se traduit par des entretiens ciblés et une
           cartographie des processus.</p>
        <h4>Livrables</h4>
        <ul>
          <li>Note de cadrage</li>
          <li>Cartographie des outils et données</li>
          <li>Liste des irritants priorisés</li>
        </ul>
      </app-expandable-card>

      <app-expandable-card title="2. Cadrer" icon="design_services"
                            summary="Définition du périmètre, des données, des priorités et du niveau d'automatisation.">
        <p>Une fois le terrain posé, nous définissons ce qui sera livré, ce qui
           ne le sera pas, et dans quel ordre. Le périmètre est borné pour rester
           réaliste.</p>
        <h4>Livrables</h4>
        <ul>
          <li>Spécification fonctionnelle</li>
          <li>Plan de mise en œuvre par étapes</li>
          <li>Estimation de charge et de délai</li>
        </ul>
      </app-expandable-card>

      <app-expandable-card title="3. Construire" icon="build"
                            summary="Développement d'une solution progressive, testable et adaptée aux utilisateurs.">
        <p>Nous développons par incréments courts, en présentant régulièrement
           l'avancement. Les utilisateurs sont associés à la validation au plus tôt.</p>
        <h4>Livrables</h4>
        <ul>
          <li>Application Angular 21 / Material 21</li>
          <li>API back-end (Python / Flask ou FastAPI)</li>
          <li>Intégrations avec les outils existants</li>
          <li>Tests unitaires et d'intégration</li>
        </ul>
      </app-expandable-card>

      <app-expandable-card title="4. Faire évoluer" icon="trending_up"
                            summary="Déploiement, accompagnement, mesure et amélioration continue.">
        <p>Le déploiement n'est pas la fin. AF10 accompagne la prise en main,
           recueille les retours, mesure l'usage et fait évoluer l'outil en
           continu.</p>
        <h4>Livrables</h4>
        <ul>
          <li>Documentation utilisateur</li>
          <li>Formation des équipes</li>
          <li>Suivi post-livraison et maintenance</li>
        </ul>
      </app-expandable-card>

      <div class="cta">
        <h2>Prêt à démarrer ?</h2>
        <a mat-flat-button color="primary" routerLink="/contact">Demander un cadrage</a>
      </div>
    </div>
  `,
  styleUrl: '../home/home.scss',
  styles: [':host { display: block; }'],
})
export class Method {}
