import {Component} from '@angular/core';
import {StaticPage} from '../static-page/static-page';

@Component({
  selector: 'app-mentions',
  imports: [StaticPage],
  template: `
    <app-static-page title="Mentions légales" updated="Juillet 2026">
      <h2>Éditeur du site</h2>
      <p>AF10 — EURL au capital de 1 000 €<br>
         SIREN : 941 041 766<br>
         Siège social : 5 Cité Paradis, 75010 Paris<br>
         Contact : contact@af10.fr</p>

      <h2>Hébergement</h2>
      <p>Le site est hébergé par un prestataire d'hébergement web professionnel
         situé en Union européenne. Les informations d'hébergement détaillées
         peuvent être communiquées sur demande.</p>

      <h2>Propriété intellectuelle</h2>
      <p>L'ensemble des contenus (textes, images, code source) est la propriété
         d'AF10 ou de ses partenaires. Toute reproduction non autorisée est
         interdite.</p>

      <h2>Responsabilité</h2>
      <p>AF10 s'efforce d'assurer l'exactitude des informations publiées mais ne
         saurait garantir leur exhaustivité. L'utilisation du site se fait sous
         l'entière responsabilité de l'utilisateur.</p>
    </app-static-page>
  `,
  styles: [':host { display: block; }'],
})
export class Mentions {}
