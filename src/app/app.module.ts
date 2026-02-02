import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from '../components/header/header.component';
import { HeroComponent } from '../components/hero/hero.component';
import { AboutComponent } from '../components/about/about.component';
import { ServicesComponent } from '../components/services/services.component';
import { ValuesComponent } from '../components/values/values.component';
import { ContactComponent } from '../components/contact/contact.component';
import { FooterComponent } from '../components/footer/footer.component';
import { TranslatePipe } from '../pipes/translate.pipe';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    ServicesComponent,
    ValuesComponent,
    ContactComponent,
    FooterComponent,
    TranslatePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }