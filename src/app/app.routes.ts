import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home').then(m => m.Home),
    title: 'AF10 — Conseil et logiciels métiers',
  },
  {
    path: 'realisations',
    loadComponent: () => import('./projects/projects').then(m => m.Projects),
    title: 'Réalisations — AF10',
  },
  {
    path: 'realisations/:slug',
    loadComponent: () => import('./project-detail/project-detail').then(m => m.ProjectDetail),
    title: 'Réalisation — AF10',
  },
  {
    path: 'services',
    loadComponent: () => import('./services/services').then(m => m.Services),
    title: 'Services — AF10',
  },
  {
    path: 'secteurs',
    loadComponent: () => import('./sectors/sectors').then(m => m.Sectors),
    title: 'Secteurs — AF10',
  },
  {
    path: 'methode',
    loadComponent: () => import('./method/method').then(m => m.Method),
    title: 'Méthode — AF10',
  },
  {
    path: 'blog',
    loadComponent: () => import('./blog/blog').then(m => m.Blog),
    title: 'Blog — AF10',
  },
  {
    path: 'blog/:slug',
    loadComponent: () => import('./blog-post/blog-post').then(m => m.BlogPost),
    title: 'Article — AF10',
  },
  {
    path: 'a-propos',
    loadComponent: () => import('./about/about').then(m => m.About),
    title: 'À propos — AF10',
  },
  {
    path: 'contact',
    loadComponent: () => import('./contact/contact').then(m => m.Contact),
    title: 'Contact — AF10',
  },
  {
    path: 'mentions-legales',
    loadComponent: () => import('./mentions/mentions').then(m => m.Mentions),
    title: 'Mentions légales — AF10',
  },
  {
    path: 'politique-confidentialite',
    loadComponent: () => import('./politique/politique').then(m => m.Politique),
    title: 'Politique de confidentialité — AF10',
  },
  {path: '**', redirectTo: ''},
];
