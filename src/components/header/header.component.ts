import { Component, HostListener } from '@angular/core';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isScrolled = false;
  isMobileMenuOpen = false;
  currentLang: string = 'fr';
  isLangMenuOpen = false;

  languages = [
    { code: 'fr', name: 'Français', flag: 'fr' },
    { code: 'en', name: 'English', flag: 'en' },
    { code: 'nl', name: 'Nederlands', flag: 'nl' }
  ];

  constructor(private translationService: TranslationService) {
    this.currentLang = this.translationService.getCurrentLang();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  toggleLangMenu() {
    this.isLangMenuOpen = !this.isLangMenuOpen;
  }

  async changeLanguage(langCode: string) {
    console.log('Changing language to:', langCode);
    
    this.currentLang = langCode;
    await this.translationService.use(langCode);
    this.isLangMenuOpen = false;
    this.isMobileMenuOpen = false;
  }

  getCurrentLanguage() {
    return this.languages.find(lang => lang.code === this.currentLang);
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.isMobileMenuOpen = false;
    }
  }
}