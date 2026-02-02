import { Component, AfterViewInit } from '@angular/core';

interface Value {
  id: number;
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-values',
  templateUrl: './values.component.html',
  styleUrls: ['./values.component.scss']
})
export class ValuesComponent implements AfterViewInit {
  values: Value[] = [
    {
      id: 1,
      title: 'Excellence et Précision',
      description: 'Nous traitons chaque espace, du petit commerce au grand bureau ou à la villa de standing, avec le même souci du détail et de la finition parfaite.',
      icon: 'star'
    },
    {
      id: 2,
      title: 'Polyvalence Professionnelle',
      description: 'Notre savoir-faire s\'étend aux bureaux, immeubles, appartements, espaces culturels et milieux spécialisés comme les salons d\'esthétique ou de coiffure, où l\'hygiène est primordiale.',
      icon: 'layers'
    },
    {
      id: 3,
      title: 'Discrétion et Efficacité',
      description: 'Nous intervenons avec une totale confidentialité afin de respecter la tranquillité de vos clients, de vos collaborateurs et de vos résidents.',
      icon: 'shield'
    },
    {
      id: 4,
      title: 'Réactivité',
      description: 'Qu\'il s\'agisse d\'un nettoyage après déménagement, d\'un entretien de bureaux ou d\'une remise en état après travaux, nous garantissons une intervention rapide, organisée et soignée.',
      icon: 'clock'
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