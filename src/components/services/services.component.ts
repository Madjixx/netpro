import { Component, AfterViewInit } from '@angular/core';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  details: string[];
  gradient: string;
}

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements AfterViewInit  {
  services: Service[] = [
    {
      id: 1,
      title: 'Entreprise & Bureaux',
      description: 'Entretien de sièges sociaux, bureaux, immeubles et espaces de coworking.',
      icon: 'building',
      details: [
        'Bureaux et sièges sociaux',
        'Espaces de coworking',
        'Salles de réunion',
        'Espaces communs'
      ],
      gradient: 'linear-gradient(135deg, #1DA1F2, #0D7FC2)'
    },
    {
      id: 2,
      title: 'Commerces & Établissements',
      description: 'Nettoyage complet pour boutiques, salons, magasins et espaces professionnels.',
      icon: 'shop',
      details: [
        'Boutiques et magasins',
        'Salons de coiffure',
        'Salons d\'esthétique',
        'Espaces culturels'
      ],
      gradient: 'linear-gradient(135deg, #9C27B0, #7B1FA2)'
    },
    {
      id: 3,
      title: 'Fin de Chantier & Déménagement',
      description: 'Remise en état approfondie après travaux ou avant état des lieux.',
      icon: 'tools',
      details: [
        'Nettoyage après travaux',
        'Remise en état',
        'Nettoyage après déménagement',
        'État des lieux'
      ],
      gradient: 'linear-gradient(135deg, #FF9800, #F57C00)'
    },
    {
      id: 4,
      title: 'Résidentiel de Standing',
      description: 'Service sur-mesure pour appartements, villas et biens premium.',
      icon: 'home',
      details: [
        'Appartements de standing',
        'Villas et maisons',
        'Logements privés',
        'Biens premium'
      ],
      gradient: 'linear-gradient(135deg, #1F9D55, #177A43)'
    },
    {
      id: 5,
      title: 'Interventions Ponctuelles',
      description: 'Missions spécifiques ou urgentes sur demande.',
      icon: 'flash',
      details: [
        'Interventions urgentes',
        'Besoins spécifiques',
        'Services personnalisés',
        'Disponibilité 24/7'
      ],
      gradient: 'linear-gradient(135deg, #E91E63, #C2185B)'
    }
  ];

ngAfterViewInit(): void {
  this.animateOnScroll();
}
  animateOnScroll(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));
  }
}