import { Component, OnInit } from '@angular/core';
import { EmailService } from '../../services/email.service';

interface QuoteForm {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  address: string;
  surface: string;
  frequency: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  
  formData: QuoteForm = {
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    address: '',
    surface: '',
    frequency: ''
  };

  services = [
    { value: 'entreprise-bureaux', label: 'Entreprise & Bureaux' },
    { value: 'commerces', label: 'Commerces & Établissements' },
    { value: 'fin-chantier', label: 'Fin de Chantier & Déménagement' },
    { value: 'residentiel', label: 'Résidentiel de Standing' },
    { value: 'ponctuel', label: 'Intervention Ponctuelle' }
  ];

  frequencies = [
    { value: 'unique', label: 'Unique' },
    { value: 'hebdomadaire', label: 'Hebdomadaire' },
    { value: 'bihebdomadaire', label: 'Bi-hebdomadaire' },
    { value: 'mensuel', label: 'Mensuel' }
  ];

  isSubmitting = false;
  showSuccess = false;
  showError = false;

  constructor(private emailService: EmailService) {}

  ngOnInit(): void {
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

  async onSubmit(): Promise<void> {
    if (!this.isFormValid()) {
      this.showError = true;
      setTimeout(() => this.showError = false, 5000);
      return;
    }

    this.isSubmitting = true;
    
    try {
      const success = await this.emailService.sendQuoteRequest(this.formData);
      
      if (success) {
        this.showSuccess = true;
        this.resetForm();
        setTimeout(() => this.showSuccess = false, 5000);
      } else {
        this.showError = true;
        setTimeout(() => this.showError = false, 5000);
      }
    } catch (error) {
      this.showError = true;
      setTimeout(() => this.showError = false, 5000);
    } finally {
      this.isSubmitting = false;
    }
  }

  isFormValid(): boolean {
    return !!(
      this.formData.name &&
      this.formData.email &&
      this.formData.service &&
      this.formData.message
    );
  }

  resetForm(): void {
    this.formData = {
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
      address: '',
      surface: '',
      frequency: ''
    };
  }
}