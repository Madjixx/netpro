import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  
  async sendQuoteRequest(formData: any): Promise<boolean> {
    try {
      const formUrl = 'https://formsubmit.co/contact.contact@netprocleaning.be';
      
      const formBody = new FormData();
      formBody.append('name', formData.name);
      formBody.append('email', formData.email);
      formBody.append('phone', formData.phone || 'Non renseigné');
      formBody.append('service', formData.service);
      formBody.append('message', formData.message);
      formBody.append('address', formData.address || 'Non renseignée');
      formBody.append('surface', formData.surface || 'Non renseignée');
      formBody.append('frequency', formData.frequency || 'Non renseignée');
      formBody.append('_subject', `Nouvelle demande de devis - ${formData.name}`);
      formBody.append('_captcha', 'false');

      const response = await fetch(formUrl, {
        method: 'POST',
        body: formBody
      });

      return response.ok;
    } catch (error) {
      console.error('Erreur:', error);
      return false;
    }
  }
}