import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CommonModule, registerLocaleData } from '@angular/common';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { en_US } from 'ng-zorro-antd/i18n';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RenderLayoutComponent } from './components/render-layout/render-layout.component';
import { CustomCarouselComponent } from './components/custom-carousel/custom-carousel.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { MenuComponent } from './components/menu/menu.component';
import { HeadingComponent } from './components/heading/heading.component';
import { LeadershipComponent } from './components/leadership/leadership.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { ServicesTaComponent } from './pages/services-ta/services-ta.component';
import { ServicesComponent } from './pages/services/services.component';
import { HomeHero1Component } from './pages/home-hero1/home-hero1.component';
import { ServicesLandingComponent } from './pages/services-landing/services-landing.component';
import { ServicesTaListComponent } from './pages/services-ta-list/services-ta-list.component';
import { ServicesSoxComponent } from './pages/services-sox/services-sox.component';
import { ServicesSoxListComponent } from './pages/services-sox-list/services-sox-list.component';
import { ServicesItComponent } from './pages/services-it/services-it.component';
import { ServicesItListComponent } from './pages/services-it-list/services-it-list.component';
import { ServicesRPAComponent } from './pages/services-rpa/services-rpa.component';
import { ServicesRPAListComponent } from './pages/services-rpalist/services-rpalist.component';
import { ServicesStartupComponent } from './pages/services-startup/services-startup.component';
import { ServicesStartupListComponent } from './pages/services-startup-list/services-startup-list.component';
import { ServicesAlchemyComponent } from './pages/services-alchemy/services-alchemy.component';
import { CarouselImgDescComponent } from './components/carousel-img-desc/carousel-img-desc.component';
import { MoreInfoComponent } from './components/more-info/more-info.component';
import { CopyrightComponent } from './components/copyright/copyright.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ImageViewerDirective } from './directive/image-viewer.directive';
import { ToggleIconComponent } from './components/toggle-icon/toggle-icon.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    RenderLayoutComponent,
    CustomCarouselComponent,
    HeroSectionComponent,
    MenuComponent,
    HeadingComponent,
    LeadershipComponent,
    TestimonialsComponent,
    ServicesTaComponent,
    ServicesComponent,
    HomeHero1Component,
    ServicesLandingComponent,
    ServicesTaListComponent,
    ServicesSoxComponent,
    ServicesSoxListComponent,
    ServicesItComponent,
    ServicesItListComponent,
    ServicesRPAComponent,
    ServicesRPAListComponent,
    ServicesStartupComponent,
    ServicesStartupListComponent,
    ServicesAlchemyComponent,
    CarouselImgDescComponent,
    MoreInfoComponent,
    CopyrightComponent,
    AboutUsComponent,
    ImageViewerDirective,
    ToggleIconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    NzIconModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    provideAnimationsAsync(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
