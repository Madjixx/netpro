import { Component, AfterViewInit, OnInit } from "@angular/core";
import { TranslationService } from "../../services/translation.service";

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  details: string[];
  gradient: string;
}

@Component({
  selector: "app-services",
  templateUrl: "./services.component.html",
  styleUrls: ["./services.component.scss"],
})
export class ServicesComponent implements OnInit, AfterViewInit {
  services: Service[] = [];

  frServices: Service[] = [
    {
      id: 1,
      title: "Entreprise & Bureaux",
      description:
        "Entretien de sièges sociaux, bureaux, immeubles et espaces de coworking.",
      icon: "building",
      details: [
        "Bureaux et sièges sociaux",
        "Espaces de coworking",
        "Salles de réunion",
        "Espaces communs",
      ],
      gradient: "linear-gradient(135deg, #1DA1F2, #0D7FC2)",
    },
    {
      id: 2,
      title: "Commerces & Établissements",
      description:
        "Nettoyage complet pour boutiques, salons, magasins et espaces professionnels.",
      icon: "shop",
      details: [
        "Boutiques et magasins",
        "Salons de coiffure",
        "Salons d'esthétique",
        "Espaces culturels",
      ],
      gradient: "linear-gradient(135deg, #9C27B0, #7B1FA2)",
    },
    {
      id: 3,
      title: "Fin de Chantier & Déménagement",
      description:
        "Remise en état approfondie après travaux ou avant état des lieux.",
      icon: "tools",
      details: [
        "Nettoyage après travaux",
        "Remise en état",
        "Nettoyage après déménagement",
        "État des lieux",
      ],
      gradient: "linear-gradient(135deg, #FF9800, #F57C00)",
    },
    {
      id: 4,
      title: "Résidentiel de Standing",
      description:
        "Service sur-mesure pour appartements, villas et biens premium.",
      icon: "home",
      details: [
        "Appartements de standing",
        "Villas et maisons",
        "Logements privés",
        "Biens premium",
      ],
      gradient: "linear-gradient(135deg, #1F9D55, #177A43)",
    },
    {
      id: 5,
      title: "Interventions Ponctuelles",
      description: "Missions spécifiques ou urgentes sur demande.",
      icon: "flash",
      details: [
        "Interventions urgentes",
        "Besoins spécifiques",
        "Services personnalisés",
        "Disponibilité 24/7",
      ],
      gradient: "linear-gradient(135deg, #E91E63, #C2185B)",
    },
  ];

  enServices: Service[] = [
    {
      id: 1,
      title: "Corporate & Offices",
      description:
        "Maintenance of headquarters, offices, buildings, and coworking spaces.",
      icon: "building",
      details: [
        "Offices and headquarters",
        "Coworking spaces",
        "Meeting rooms",
        "Common areas",
      ],
      gradient: "linear-gradient(135deg, #1DA1F2, #0D7FC2)",
    },
    {
      id: 2,
      title: "Retail & Business Facilities",
      description:
        "Comprehensive cleaning for shops, salons, stores, and professional spaces.",
      icon: "shop",
      details: [
        "Shops and stores",
        "Hair salons",
        "Beauty salons",
        "Cultural spaces",
      ],
      gradient: "linear-gradient(135deg, #9C27B0, #7B1FA2)",
    },
    {
      id: 3,
      title: "Post-Construction & Moving",
      description:
        "Thorough restoration after construction work or before property inspection.",
      icon: "tools",
      details: [
        "Post-construction cleaning",
        "Full restoration",
        "Post-move cleaning",
        "Property inspection",
      ],
      gradient: "linear-gradient(135deg, #FF9800, #F57C00)",
    },
    {
      id: 4,
      title: "High-End Residential",
      description:
        "Tailored services for apartments, villas, and premium properties.",
      icon: "home",
      details: [
        "Luxury apartments",
        "Villas and houses",
        "Private residences",
        "Premium properties",
      ],
      gradient: "linear-gradient(135deg, #1F9D55, #177A43)",
    },
    {
      id: 5,
      title: "One-Off Interventions",
      description: "Specific or urgent services upon request.",
      icon: "flash",
      details: [
        "Emergency interventions",
        "Specific needs",
        "Customized services",
        "24/7 availability",
      ],
      gradient: "linear-gradient(135deg, #E91E63, #C2185B)",
    },
  ];

  nlServices: Service[] = [
    {
      id: 1,
      title: "Bedrijven & Kantoren",
      description:
        "Onderhoud van hoofdkantoren, kantoren, gebouwen en coworkingruimtes.",
      icon: "building",
      details: [
        "Kantoren en hoofdkantoren",
        "Coworkingruimtes",
        "Vergaderruimtes",
        "Gemeenschappelijke ruimtes",
      ],
      gradient: "linear-gradient(135deg, #1DA1F2, #0D7FC2)",
    },
    {
      id: 2,
      title: "Winkels & Bedrijfsruimtes",
      description:
        "Grondige schoonmaak voor winkels, salons, zaken en professionele ruimtes.",
      icon: "shop",
      details: [
        "Winkels en zaken",
        "Kapsalons",
        "Schoonheidssalons",
        "Culturele ruimtes",
      ],
      gradient: "linear-gradient(135deg, #9C27B0, #7B1FA2)",
    },
    {
      id: 3,
      title: "Na de Bouw & Verhuizing",
      description:
        "Grondige oplevering na werkzaamheden of vóór de plaatsbeschrijving.",
      icon: "tools",
      details: [
        "Schoonmaak na werkzaamheden",
        "Opleveringsschoonmaak",
        "Schoonmaak na verhuizing",
        "Plaatsbeschrijving",
      ],
      gradient: "linear-gradient(135deg, #FF9800, #F57C00)",
    },
    {
      id: 4,
      title: "Hoogwaardig Residentieel",
      description:
        "Maatwerkservice voor appartementen, villa's en premium woningen.",
      icon: "home",
      details: [
        "Luxe appartementen",
        "Villa's en huizen",
        "Privéwoningen",
        "Premium vastgoed",
      ],
      gradient: "linear-gradient(135deg, #1F9D55, #177A43)",
    },
    {
      id: 5,
      title: "Eenmalige Interventies",
      description: "Specifieke of dringende opdrachten op aanvraag.",
      icon: "flash",
      details: [
        "Dringende interventies",
        "Specifieke behoeften",
        "Gepersonaliseerde diensten",
        "24/7 beschikbaarheid",
      ],
      gradient: "linear-gradient(135deg, #E91E63, #C2185B)",
    },
  ];

  private observer?: IntersectionObserver;

  constructor(private readonly translationService: TranslationService) {}

  ngOnInit(): void {
    this.translationService.langChanged$.subscribe((lang) => {
      this.updateServices(lang);
    });

    setTimeout(() => {
      this.animateOnScroll();
    });
  }

  ngAfterViewInit(): void {
    this.animateOnScroll();
  }

  private updateServices(lang: string): void {
    if (lang === "fr") {
      this.services = this.frServices;
    } else if (lang === "nl") {
      this.services = this.nlServices;
    } else if (lang === "en") {
      this.services = this.enServices;
    } else {
      // Par défaut, utiliser le français
      this.services = this.frServices;
    }
  }

  trackById(index: number, service: Service): number {
    return service.id;
  }

  animateOnScroll(): void {
    if (this.observer) {
      this.observer.disconnect();
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 },
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => this.observer!.observe(el));
  }
}
