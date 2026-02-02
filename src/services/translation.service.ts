import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private currentLang = new BehaviorSubject<string>('fr');
  private translations: any = {};

  currentLang$: Observable<string> = this.currentLang.asObservable();

  constructor() {
    // Charger la langue par défaut depuis le localStorage ou utiliser 'fr'
    const savedLang = localStorage.getItem('netpro-lang') || 'fr';
    this.use(savedLang);
  }

  async use(lang: string): Promise<void> {
    try {
      const response = await fetch(`/assets/i18n/${lang}.json`);
      this.translations = await response.json();
      this.currentLang.next(lang);
      localStorage.setItem('netpro-lang', lang);
    } catch (error) {
      console.error(`Error loading translation file for ${lang}:`, error);
    }
  }

  instant(key: string): string {
    const keys = key.split('.');
    let value = this.translations;
    
    for (const k of keys) {
      if (value && value[k]) {
        value = value[k];
      } else {
        return key; // Retourner la clé si la traduction n'existe pas
      }
    }
    
    return value;
  }

  getCurrentLang(): string {
    return this.currentLang.value;
  }
}