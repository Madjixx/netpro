import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class TranslationService {
  private currentLang = "fr";
  private translations: any = {};

  private langChangedSubject = new BehaviorSubject<string>("fr");
  langChanged$ = this.langChangedSubject.asObservable();

  async init(): Promise<void> {
    const storedLang = localStorage.getItem("lang");
    this.currentLang = storedLang || "fr";

    await this.loadTranslations(this.currentLang);
    this.langChangedSubject.next(this.currentLang);
  }

  getCurrentLang(): string {
    return this.currentLang;
  }

  async use(lang: string): Promise<void> {
    if (lang === this.currentLang) return;

    this.currentLang = lang;
    localStorage.setItem("lang", lang);

    await this.loadTranslations(lang);
    this.langChangedSubject.next(lang);
  }

  instant(key: string): string {
    return (
      key
        .split(".")
        .reduce((obj, k) => (obj ? obj[k] : null), this.translations) || key
    );
  }

  private async loadTranslations(lang: string): Promise<void> {
    const response = await fetch(`./assets/i18n/${lang}.json`);
    this.translations = await response.json();
  }
}