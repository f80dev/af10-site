// ============================================================
// AF10 — shared utilities
// Used across the whole app, mirrors the `tools.ts` pattern
// in other AF10 repositories.
// ============================================================

/** Returns the current year. */
export function currentYear(): number {
  return new Date().getFullYear();
}

/** Format a French phone number for display. */
export function formatPhone(phone: string): string {
  return phone.replace(/(\d{2})(?=\d)/g, '$1 ');
}

/** Simple email pattern — strict enough for client validation. */
export const EMAIL_RE = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

/** Project status as used in the data model. */
export type ProjectStatus = 'client' | 'product' | 'prototype';

/** Project category. */
export type ProjectCategory =
  | 'scolarite'
  | 'culture'
  | 'crm'
  | 'ia'
  | 'automatisation'
  | 'donnees'
  | 'geospatial';

/** AF10 project descriptor. */
export interface Af10Project {
  id: string;
  slug: string;
  title: string;
  category: ProjectCategory;
  status: ProjectStatus;
  sector: string;
  summary: string;
  problem: string;
  solution: string;
  benefits: string[];
  technologies?: string[];
  integrations?: string[];
  featured: boolean;
}
