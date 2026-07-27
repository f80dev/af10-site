import {Component} from '@angular/core';
import {StaticPage} from '../static-page/static-page';

@Component({
  selector: 'app-politique',
  imports: [StaticPage],
  template: `
    <app-static-page title="Politique de confidentialité" updated="Juillet 2026">
      <h2>Données collectées</h2>
      <p>Lorsque vous utilisez le formulaire de contact, AF10 collecte uniquement
         les informations que vous saisissez (nom, organisation, email, sujet,
         message). Aucune donnée n'est collectée à votre insu.</p>

      <h2>Finalités</h2>
      <p>Les données sont utilisées exclusivement pour répondre à votre demande.
         Elles ne sont jamais cédées ni vendues à des tiers.</p>

      <h2>Conservation</h2>
      <p>Les données sont conservées le temps nécessaire au traitement de votre
         demande, puis supprimées. Vous pouvez demander leur suppression à tout
         moment à <a href="mailto:contact@af10.fr">contact@af10.fr</a>.</p>

      <h2>Cookies</h2>
      <p>Ce site n'utilise pas de cookies de mesure d'audience ni de traceurs
         publicitaires. Seuls des cookies techniques strictement nécessaires au
         fonctionnement du site peuvent être utilisés.</p>

      <h2>Vos droits</h2>
      <p>Conformément au RGPD, vous disposez d'un droit d'accès, de rectification,
         d'effacement et de portabilité sur vos données. Pour exercer ces droits,
         écrivez à <a href="mailto:contact@af10.fr">contact@af10.fr</a>.</p>
    </app-static-page>
  `,
  styles: [':host { display: block; }'],
})
export class Politique {}
