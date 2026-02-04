import { Component, AfterViewInit, inject, OnInit } from "@angular/core";
import { TranslationService } from "src/services/translation.service";

interface Value {
  id: number;
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: "app-values",
  templateUrl: "./values.component.html",
  styleUrls: ["./values.component.scss"],
})
export class ValuesComponent implements AfterViewInit, OnInit {
  values: Value[] = [];
  frValues: Value[] = [
    {
      id: 1,
      title: "Excellence et Précision",
      description:
        "Nous traitons chaque espace, du petit commerce au grand bureau ou à la villa de standing, avec le même souci du détail et de la finition parfaite.",
      icon: "star",
    },
    {
      id: 2,
      title: "Polyvalence Professionnelle",
      description:
        "Notre savoir-faire s'étend aux bureaux, immeubles, appartements, espaces culturels et milieux spécialisés comme les salons d'esthétique ou de coiffure, où l'hygiène est primordiale.",
      icon: "layers",
    },
    {
      id: 3,
      title: "Discrétion et Efficacité",
      description:
        "Nous intervenons avec une totale confidentialité afin de respecter la tranquillité de vos clients, de vos collaborateurs et de vos résidents.",
      icon: "shield",
    },
    {
      id: 4,
      title: "Réactivité",
      description:
        "Qu'il s'agisse d'un nettoyage après déménagement, d'un entretien de bureaux ou d'une remise en état après travaux, nous garantissons une intervention rapide, organisée et soignée.",
      icon: "clock",
    },
  ];
  enValues: Value[] = [
    {
      id: 1,
      title: "Excellence and Precision",
      description:
        "We treat each space, from small shops to large offices or luxury villas, with the same attention to detail and perfect finish.",
      icon: "star",
    },
    {
      id: 2,
      title: "Professional Versatility",
      description:
        "Our expertise spans offices, buildings, apartments, cultural spaces and specialized environments like beauty salons or hairdressing salons where hygiene is paramount.",
      icon: "layers",
    },
    {
      id: 3,
      title: "Discretion and Efficiency",
      description:
        "We operate with complete confidentiality to respect the tranquility of your clients, colleagues and residents.",
      icon: "shield",
    },
    {
      id: 4,
      title: "Responsiveness",
      description:
        "Whether it is post-move cleaning, office maintenance or post-construction restoration, we guarantee a fast, organized and meticulous intervention.",
      icon: "clock",
    },
  ];
  nlValues: Value[] = [
    {
      id: 1,
      title: "Excellentie en Precisie",
      description:
        "Wij behandelen elke ruimte, van kleine winkels tot grote kantoren of luxe villa’s, met dezelfde aandacht voor detail en een perfecte afwerking.",
      icon: "star",
    },
    {
      id: 2,
      title: "Professionele Veelzijdigheid",
      description:
        "Onze expertise strekt zich uit over kantoren, gebouwen, appartementen, culturele ruimtes en gespecialiseerde omgevingen zoals schoonheids- en kapsalons, waar hygiëne van essentieel belang is.",
      icon: "layers",
    },
    {
      id: 3,
      title: "Discretie en Efficiëntie",
      description:
        "Wij werken met volledige discretie om de rust van uw klanten, medewerkers en bewoners te respecteren.",
      icon: "shield",
    },
    {
      id: 4,
      title: "Snelheid en Reactievermogen",
      description:
        "Of het nu gaat om schoonmaak na een verhuizing, kantooronderhoud of oplevering na werkzaamheden, wij garanderen een snelle, georganiseerde en zorgvuldige interventie.",
      icon: "clock",
    },
  ];
  private observer?: IntersectionObserver;
  private readonly translationService = inject(TranslationService);

  ngOnInit() {
    this.translationService.langChanged$.subscribe((lang) => {
      if (lang === "fr") this.values = this.frValues;
      else if (lang === "en") this.values = this.enValues;
      else if (lang === "nl") this.values = this.nlValues;
    });
    setTimeout(() => {
      this.animateOnScroll();
    });
  }

  ngAfterViewInit(): void {
    this.animateOnScroll();
  }

  trackById(index: number, value: Value): number {
    return value.id;
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
