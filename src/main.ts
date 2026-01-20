import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="app-container">
      <header class="header">
        <div class="container">
          <div class="logo-section">
            <div class="logo">
              <div class="water-drop"></div>
              <div class="logo-text">
                <h1>NETPRO<span>CLEANING</span></h1>
              </div>
            </div>
            <p class="tagline">Nettoyage professionnel pour entreprises</p>
          </div>
          <nav class="nav">
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
            <a href="tel:0465972862" class="cta-button">Contactez-nous</a>
          </nav>
        </div>
      </header>

      <section class="hero">
        <div class="hero-overlay"></div>
        <div class="container hero-content">
          <h2 class="hero-title">La propreté au service de votre image professionnelle</h2>
          <p class="hero-subtitle">Nettoyage professionnel pour entreprises et espaces commerciaux</p>
          <div class="hero-features">
            <div class="feature">
              <span class="icon">✓</span>
              <span>Horaires flexibles</span>
            </div>
            <div class="feature">
              <span class="icon">✓</span>
              <span>Intervention rapide</span>
            </div>
            <div class="feature">
              <span class="icon">✓</span>
              <span>Équipe professionnelle</span>
            </div>
          </div>
          <a href="#contact" class="hero-button">Demander un devis</a>
        </div>
      </section>

      <section id="services" class="services">
        <div class="container">
          <h2 class="section-title">Nos services <span>(entreprises uniquement)</span></h2>
          <div class="services-grid">
            <div class="service-card">
              <div class="service-icon">🏢</div>
              <h3>Nettoyage de bureaux</h3>
              <p>Entretien professionnel de vos espaces de travail</p>
            </div>
            <div class="service-card">
              <div class="service-icon">🏪</div>
              <h3>Nettoyage de commerces & magasins</h3>
              <p>Propreté impeccable pour vos espaces commerciaux</p>
            </div>
            <div class="service-card">
              <div class="service-icon">🏛️</div>
              <h3>Nettoyage d'espaces professionnels</h3>
              <p>Bureaux, écoles, commerces, co-working, etc.</p>
            </div>
            <div class="service-card">
              <div class="service-icon">🏘️</div>
              <h3>Entretien d'immeubles privés</h3>
              <p>Parties communes maintenues impeccablement</p>
            </div>
            <div class="service-card">
              <div class="service-icon">📅</div>
              <h3>Entretien régulier ou ponctuel</h3>
              <p>Formules adaptées à vos besoins</p>
            </div>
            <div class="service-card">
              <div class="service-icon">📦</div>
              <h3>Nettoyage après déménagement</h3>
              <p>Remise en état professionnelle de vos locaux</p>
            </div>
            <div class="service-card">
              <div class="service-icon">✨</div>
              <h3>Remise en état de locaux</h3>
              <p>Rénovation complète de vos espaces professionnels</p>
            </div>
          </div>
        </div>
      </section>

      <section class="advantages">
        <div class="container">
          <h2 class="section-title">Direction opérationnelle</h2>
          <div class="advantages-grid">
            <div class="advantage">
              <div class="advantage-icon">👥</div>
              <h3>Équipe fiable et discrète</h3>
            </div>
            <div class="advantage">
              <div class="advantage-icon">🛡️</div>
              <h3>Strikte naleving van hygiënenormen</h3>
            </div>
            <div class="advantage">
              <div class="advantage-icon">⭐</div>
              <h3>Travail soigné et professionnel</h3>
            </div>
            <div class="advantage">
              <div class="advantage-icon">🎯</div>
              <h3>Diensten aangepast aan uw activitéit</h3>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" class="contact">
        <div class="container">
          <h2 class="section-title">Contact</h2>
          <div class="contact-content">
            <div class="contact-info">
              <div class="contact-item">
                <div class="contact-icon">📞</div>
                <div>
                  <h3>Téléphone</h3>
                  <a href="tel:0465972862">0465 97 28 62</a>
                </div>
              </div>
              <div class="contact-item">
                <div class="contact-icon">📧</div>
                <div>
                  <h3>Email</h3>
                  <a href="mailto:contact@netprocleaning.be">contact&#64;netprocleaning.be</a>
                </div>
              </div>
              <div class="contact-item">
                <div class="contact-icon">🌐</div>
                <div>
                  <h3>Website</h3>
                  <a href="https://www.netprocleaning.be" target="_blank">www.netprocleaning.be</a>
                </div>
              </div>
            </div>
            <div class="contact-cta">
              <h3>À votre écoute</h3>
              <p>Nettoyage professionnel</p>
              <a href="tel:0465972862" class="contact-button">Appelez maintenant</a>
            </div>
          </div>
        </div>
      </section>

      <footer class="footer">
        <div class="container">
          <div class="footer-content">
            <div class="footer-logo">
              <div class="water-drop-small"></div>
              <span>NETPRO CLEANING</span>
            </div>
            <p class="footer-note">Visuels non contractuels - Prestations réalisées selon cahier des charges client.</p>
          </div>
        </div>
      </footer>
    </div>
  `,
  styles: [`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    :host {
      display: block;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      color: #333;
      line-height: 1.6;
    }

    .app-container {
      min-height: 100vh;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }

    .header {
      background: linear-gradient(135deg, #0e6ba8 0%, #0a7ea4 100%);
      color: white;
      padding: 1.5rem 0;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      position: sticky;
      top: 0;
      z-index: 100;
    }

    .header .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 1rem;
    }

    .logo-section {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .logo {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .water-drop {
      width: 50px;
      height: 50px;
      background: linear-gradient(135deg, #4dd0e1 0%, #0097a7 100%);
      border-radius: 50% 50% 50% 0;
      transform: rotate(-45deg);
      box-shadow: inset 0 0 20px rgba(255,255,255,0.3);
      position: relative;
    }

    .water-drop::after {
      content: '✨';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(45deg);
      font-size: 20px;
    }

    .logo-text h1 {
      font-size: 1.8rem;
      font-weight: 700;
      letter-spacing: 1px;
    }

    .logo-text h1 span {
      display: block;
      font-size: 1.2rem;
      font-weight: 400;
      margin-top: -5px;
    }

    .tagline {
      font-size: 0.9rem;
      opacity: 0.9;
      margin-left: 66px;
    }

    .nav {
      display: flex;
      align-items: center;
      gap: 2rem;
    }

    .nav a {
      color: white;
      text-decoration: none;
      font-weight: 500;
      transition: opacity 0.3s;
    }

    .nav a:hover {
      opacity: 0.8;
    }

    .cta-button {
      background: white;
      color: #0e6ba8 !important;
      padding: 0.6rem 1.5rem;
      border-radius: 25px;
      font-weight: 600;
      transition: transform 0.3s, box-shadow 0.3s;
    }

    .cta-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    }

    .hero {
      background: linear-gradient(135deg, #0a4a6b 0%, #0e6ba8 50%, #26a69a 100%);
      color: white;
      padding: 6rem 0;
      position: relative;
      overflow: hidden;
    }

    .hero::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: url('data:image/svg+xml,<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="2" fill="rgba(255,255,255,0.1)"/></svg>');
      opacity: 0.3;
    }

    .hero-content {
      position: relative;
      z-index: 1;
      text-align: center;
    }

    .hero-title {
      font-size: 3rem;
      font-weight: 700;
      margin-bottom: 1rem;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    }

    .hero-subtitle {
      font-size: 1.3rem;
      margin-bottom: 3rem;
      opacity: 0.95;
    }

    .hero-features {
      display: flex;
      justify-content: center;
      gap: 3rem;
      margin-bottom: 3rem;
      flex-wrap: wrap;
    }

    .feature {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 1.1rem;
    }

    .feature .icon {
      background: rgba(255,255,255,0.2);
      width: 30px;
      height: 30px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
    }

    .hero-button {
      display: inline-block;
      background: white;
      color: #0e6ba8;
      padding: 1rem 3rem;
      border-radius: 30px;
      text-decoration: none;
      font-weight: 600;
      font-size: 1.1rem;
      transition: transform 0.3s, box-shadow 0.3s;
      box-shadow: 0 5px 20px rgba(0,0,0,0.2);
    }

    .hero-button:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 30px rgba(0,0,0,0.3);
    }

    .services {
      padding: 5rem 0;
      background: #f8f9fa;
    }

    .section-title {
      text-align: center;
      font-size: 2.5rem;
      color: #0e6ba8;
      margin-bottom: 3rem;
    }

    .section-title span {
      font-size: 1.2rem;
      color: #666;
      font-weight: 400;
      display: block;
      margin-top: 0.5rem;
    }

    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2rem;
    }

    .service-card {
      background: white;
      padding: 2rem;
      border-radius: 15px;
      box-shadow: 0 5px 20px rgba(0,0,0,0.08);
      transition: transform 0.3s, box-shadow 0.3s;
      text-align: center;
    }

    .service-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 30px rgba(0,0,0,0.15);
    }

    .service-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    .service-card h3 {
      color: #0e6ba8;
      margin-bottom: 0.5rem;
      font-size: 1.3rem;
    }

    .service-card p {
      color: #666;
      line-height: 1.6;
    }

    .advantages {
      padding: 5rem 0;
      background: linear-gradient(135deg, #0e6ba8 0%, #26a69a 100%);
      color: white;
    }

    .advantages .section-title {
      color: white;
    }

    .advantages-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
    }

    .advantage {
      background: rgba(255,255,255,0.1);
      padding: 2rem;
      border-radius: 15px;
      text-align: center;
      backdrop-filter: blur(10px);
      transition: background 0.3s;
    }

    .advantage:hover {
      background: rgba(255,255,255,0.2);
    }

    .advantage-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    .advantage h3 {
      font-size: 1.2rem;
    }

    .contact {
      padding: 5rem 0;
      background: #f8f9fa;
    }

    .contact .section-title {
      color: #0e6ba8;
    }

    .contact-content {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 3rem;
      margin-top: 3rem;
    }

    .contact-info {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .contact-item {
      display: flex;
      align-items: flex-start;
      gap: 1.5rem;
      background: white;
      padding: 1.5rem;
      border-radius: 15px;
      box-shadow: 0 5px 20px rgba(0,0,0,0.08);
    }

    .contact-icon {
      font-size: 2.5rem;
    }

    .contact-item h3 {
      color: #0e6ba8;
      margin-bottom: 0.5rem;
    }

    .contact-item a {
      color: #333;
      text-decoration: none;
      transition: color 0.3s;
      font-size: 1.1rem;
    }

    .contact-item a:hover {
      color: #0e6ba8;
    }

    .contact-cta {
      background: linear-gradient(135deg, #0e6ba8 0%, #26a69a 100%);
      color: white;
      padding: 3rem;
      border-radius: 15px;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      box-shadow: 0 10px 30px rgba(0,0,0,0.15);
    }

    .contact-cta h3 {
      font-size: 2rem;
      margin-bottom: 1rem;
    }

    .contact-cta p {
      font-size: 1.2rem;
      margin-bottom: 2rem;
      opacity: 0.9;
    }

    .contact-button {
      display: inline-block;
      background: white;
      color: #0e6ba8;
      padding: 1rem 2.5rem;
      border-radius: 30px;
      text-decoration: none;
      font-weight: 600;
      font-size: 1.1rem;
      transition: transform 0.3s, box-shadow 0.3s;
      align-self: center;
    }

    .contact-button:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 20px rgba(0,0,0,0.2);
    }

    .footer {
      background: #1a1a1a;
      color: white;
      padding: 2rem 0;
    }

    .footer-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      text-align: center;
    }

    .footer-logo {
      display: flex;
      align-items: center;
      gap: 1rem;
      font-size: 1.3rem;
      font-weight: 600;
    }

    .water-drop-small {
      width: 30px;
      height: 30px;
      background: linear-gradient(135deg, #4dd0e1 0%, #0097a7 100%);
      border-radius: 50% 50% 50% 0;
      transform: rotate(-45deg);
    }

    .footer-note {
      font-size: 0.85rem;
      opacity: 0.7;
    }

    @media (max-width: 768px) {
      .header .container {
        flex-direction: column;
        text-align: center;
      }

      .nav {
        flex-wrap: wrap;
        justify-content: center;
      }

      .tagline {
        margin-left: 0;
        text-align: center;
      }

      .hero-title {
        font-size: 2rem;
      }

      .hero-subtitle {
        font-size: 1.1rem;
      }

      .hero-features {
        flex-direction: column;
        gap: 1rem;
      }

      .section-title {
        font-size: 2rem;
      }

      .services-grid,
      .advantages-grid {
        grid-template-columns: 1fr;
      }

      .contact-content {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class App {
  name = 'NETPRO CLEANING';
}

bootstrapApplication(App);
