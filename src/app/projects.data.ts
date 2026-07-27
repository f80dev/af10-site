import {Af10Project} from './tools';

// ============================================================
// AF10 — project portfolio
// One source of truth, consumed by the projects list and
// the project detail page. Update here to publish a new case.
// ============================================================

export const PROJECTS: Af10Project[] = [
  {
    id: 'oasis-tools',
    slug: 'oasis-tools',
    title: 'OasisTools',
    category: 'scolarite',
    status: 'client',
    sector: 'Gestion de scolarité — établissements culturels',
    summary:
      "Un outil complémentaire connecté à un système de scolarité pour traiter les cas spécifiques, exploiter les données et produire des documents opérationnels.",
    problem:
      "Les établissements disposent d'un système métier central mais rencontrent des besoins spécifiques non couverts : corrections, exports, génération de documents, traitement de cas particuliers.",
    solution:
      "Application Angular 21 + Angular Material 21, connectée à l'API de scolarité, capable de manipuler plusieurs formats bureautiques et de produire des documents opérationnels.",
    benefits: [
      "Réduction du travail manuel sur les dossiers particuliers",
      "Production d'exports cohérents avec les modèles établissement",
      "Adaptation aux processus réels sans modifier le système central",
    ],
    technologies: ['Angular 21', 'Material 21', 'TypeScript', 'xlsx', 'officeparser'],
    integrations: ['API Scolasis', 'Google Sheets', 'modèles Word/Excel'],
    featured: true,
  },
  {
    id: 'data-culture',
    slug: 'data-culture',
    title: 'Data Culture Pro',
    category: 'culture',
    status: 'client',
    sector: 'Établissements culturels et institutions',
    summary:
      "Une plateforme d'analyse et de gestion de données culturelles, déclinée par établissement (CNSMDP, ENSAD, FEMIS, SNL).",
    problem:
      "Les institutions culturelles ont des processus spécifiques, plusieurs sources de données et besoin d'outils adaptés à leur fonctionnement.",
    solution:
      "Développement d'un socle applicatif Angular, décliné par établissement avec environnements alpha, bêta et production.",
    benefits: [
      "Adaptation au contexte institutionnel",
      "Exploitation de données hétérogènes",
      "Évolution vers des usages métier spécifiques",
    ],
    technologies: ['Angular', 'TypeScript', 'PWA', 'Charts'],
    integrations: ['Scolasis', 'Google Drive', 'exports Office'],
    featured: true,
  },
  {
    id: 'emilie-therapie',
    slug: 'emilie-therapie',
    title: 'EmilieThérapie',
    category: 'crm',
    status: 'client',
    sector: 'Profession libérale — santé / relation client',
    summary:
      "Site web et application de gestion pour une psychothérapeute : agenda, tâches, contenu éditorial.",
    problem:
      "Une professionnelle devait gérer sa présence web, ses rendez-vous, ses tâches et l'information de ses patients, sans outil adapté à sa pratique.",
    solution:
      "Application Angular 21 + Material 21 avec API distante pour l'agenda et la création de tâches, déployée sur GitHub Pages.",
    benefits: [
      "Outil métier adapté à l'activité",
      "Centralisation agenda / tâches / contenu",
      "Évolutivité vers un mini-CRM complet",
    ],
    technologies: ['Angular 21', 'Material 21', 'API REST'],
    integrations: ['API agenda propriétaire', 'déploiement GitHub Pages'],
    featured: true,
  },
  {
    id: 'rando-gpx',
    slug: 'rando-gpx',
    title: 'RandoGPX',
    category: 'geospatial',
    status: 'product',
    sector: 'Tourisme et activités outdoor',
    summary:
      "Génération d'itinéraires de randonnée ou de cyclotourisme à partir d'une trace GPX, augmentée par un agent IA.",
    problem:
      "Construire un séjour de randonnée suppose de croiser trace GPX, communes, distances, dénivelés, hébergements, repas, points d'intérêt et transports.",
    solution:
      "Application Angular 21 + Leaflet couplée à une API Flask exploitant la base datatourisme.db et un agent IA pour la recommandation.",
    benefits: [
      "Automatisation d'un travail de préparation complexe",
      "Personnalisation selon les contraintes utilisateur",
      "Cartographie interactive et étapes révisables",
    ],
    technologies: ['Angular 21', 'Material 21', 'Leaflet', 'Flask', 'SQLite', 'R-tree'],
    integrations: ['datatourisme.db', 'OpenStreetMap', 'Hermes Agent IA'],
    featured: true,
  },
  {
    id: 'page-semantic-extractor',
    slug: 'page-semantic-extractor',
    title: 'Page Semantic Extractor',
    category: 'donnees',
    status: 'product',
    sector: 'Collecte et structuration de données web',
    summary:
      "Extension Chrome qui extrait le contenu sémantique de pages web et envoie un JSON structuré à une API distante.",
    problem:
      "Les informations utiles sont dispersées dans des pages web dynamiques, parfois chargées après défilement, difficiles à collecter et à structurer.",
    solution:
      "Extension Chrome Manifest V3, Angular 21 + Material 21, avec scroll automatisé, exploration DFS des liens et envoi API configurable.",
    benefits: [
      "Automatisation de la collecte web",
      "Préparation de données pour l'IA ou un RAG",
      "Exploration récursive configurable",
    ],
    technologies: ['Angular 21', 'Material 21', 'Manifest V3', 'Service Worker'],
    integrations: ['API REST configurable', 'Bearer / API Key'],
    featured: true,
  },
  {
    id: 'social-assistant',
    slug: 'social-assistant',
    title: 'Social Assistant',
    category: 'ia',
    status: 'product',
    sector: 'Relation client et community management',
    summary:
      "Extension Chrome + API FastAPI qui analyse un tweet et propose une réponse suggérée via un LLM.",
    problem:
      "Analyser rapidement un message social et préparer une réponse adaptée demande du temps et une lecture humaine.",
    solution:
      "Extension Chrome MV3 + API FastAPI capable d'analyser le texte, d'identifier le sentiment, d'extraire les thèmes et de proposer une réponse.",
    benefits: [
      "Accélération du traitement des messages",
      "Homogénéisation des réponses",
      "Aide au community management",
    ],
    technologies: ['JavaScript', 'FastAPI', 'OpenAI API', 'Manifest V3'],
    integrations: ['twitter.com', 'OpenAI / LLM'],
    featured: false,
  },
  {
    id: 'auto-planning',
    slug: 'auto-planning',
    title: 'AutoPlanning',
    category: 'automatisation',
    status: 'product',
    sector: 'Planification sous contraintes — enseignement',
    summary:
      "Moteur de génération de plannings sous contraintes multiples (salles, enseignants, groupes, récurrences).",
    problem:
      "Construire manuellement un planning d'enseignement avec disponibilités, distances entre salles et récurrences est long et source d'erreurs.",
    solution:
      "Moteur Python chargé depuis Google Sheets, applique des contraintes, optimise un score et exporte vers Excel.",
    benefits: [
      "Automatisation du planning d'enseignement",
      "Export Excel exploitable par l'administration",
      "Réduction des conflits et erreurs",
    ],
    technologies: ['Python', 'pandas', 'Google Sheets API', 'openpyxl'],
    integrations: ['Google Sheets', 'Excel'],
    featured: false,
  },
];

export function getProjectBySlug(slug: string): Af10Project | undefined {
  return PROJECTS.find(p => p.slug === slug);
}

export const CATEGORY_LABELS: Record<string, string> = {
  scolarite: 'Scolarité',
  culture: 'Culture',
  crm: 'Relation client',
  ia: 'IA appliquée',
  automatisation: 'Automatisation',
  donnees: 'Données',
  geospatial: 'Géospatial',
};
