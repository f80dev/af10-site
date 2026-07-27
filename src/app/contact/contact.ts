import {Component, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterLink} from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {NgIf, NgFor} from '@angular/common';

import {EMAIL_RE} from '../tools';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, RouterLink, MatFormFieldModule, MatInputModule, MatSelectModule,
    MatButtonModule, MatCheckboxModule, MatIconModule, NgIf, NgFor],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  protected name = signal('');
  protected org = signal('');
  protected email = signal('');
  protected subject = signal('');
  protected need = signal('');
  protected message = signal('');
  protected consent = signal(false);
  protected submitted = signal(false);
  protected submitting = signal(false);
  protected error = signal('');

  protected readonly needs = [
    'Application métier',
    'Intégration d\'un outil existant',
    'Automatisation',
    'IA appliquée',
    'Scolarité',
    'CRM / relation client',
    'Autre',
  ];

  submit() {
    this.error.set('');
    if (!this.name().trim()) { this.error.set('Le nom est requis.'); return; }
    if (!EMAIL_RE.test(this.email())) { this.error.set('Email invalide.'); return; }
    if (!this.message().trim()) { this.error.set('Le message est requis.'); return; }
    if (!this.consent()) { this.error.set('Vous devez accepter le traitement de vos données.'); return; }

    this.submitting.set(true);
    // Simulation d'envoi : ouvre un mailto pré-rempli.
    setTimeout(() => {
      const body = [
        `Nom: ${this.name()}`,
        `Organisation: ${this.org()}`,
        `Email: ${this.email()}`,
        `Type de besoin: ${this.need() || '—'}`,
        '',
        'Message:',
        this.message(),
      ].join('\n');
      window.location.href = `mailto:contact@af10.fr?subject=${encodeURIComponent(this.subject() || 'Contact AF10')}&body=${encodeURIComponent(body)}`;
      this.submitting.set(false);
      this.submitted.set(true);
    }, 300);
  }
}
