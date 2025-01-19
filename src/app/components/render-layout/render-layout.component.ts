import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomCarouselComponent } from '../custom-carousel/custom-carousel.component';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { FooterComponent } from '../footer/footer.component';
import { LeadershipComponent } from '../leadership/leadership.component';
import { TestimonialsComponent } from '../testimonials/testimonials.component';
import { HomeHero1Component } from '../../pages/home-hero1/home-hero1.component';
import { ServicesTaComponent } from '../../pages/services-ta/services-ta.component';import { ServicesTaListComponent } from '../../pages/services-ta-list/services-ta-list.component';
import { ServicesSoxComponent } from '../../pages/services-sox/services-sox.component';
import { ServicesSoxListComponent } from '../../pages/services-sox-list/services-sox-list.component';
import { ServicesItListComponent } from '../../pages/services-it-list/services-it-list.component';
import { ServicesItComponent } from '../../pages/services-it/services-it.component';
import { ServicesRPAComponent } from '../../pages/services-rpa/services-rpa.component';
import { ServicesRPAListComponent } from '../../pages/services-rpalist/services-rpalist.component';
import { ServicesStartupListComponent } from '../../pages/services-startup-list/services-startup-list.component';
import { ServicesStartupComponent } from '../../pages/services-startup/services-startup.component';
import { ServicesAlchemyComponent } from '../../pages/services-alchemy/services-alchemy.component';
import { AboutUsComponent } from '../about-us/about-us.component';

@Component({
  selector: 'app-render-layout',
  templateUrl: './render-layout.component.html',
  styleUrl: './render-layout.component.scss'
})
export class RenderLayoutComponent implements OnInit {
  @ViewChild('dynamicContainer', { read: ViewContainerRef, static: true }) container: ViewContainerRef;
  layout: any;
  layoutComponentsMap: { [key: string]: any } = {
    "carousel": CustomCarouselComponent,
    "hero-section": HeroSectionComponent,
    'leadership': LeadershipComponent,
    'testimonial': TestimonialsComponent,
    "footer": FooterComponent,
    "HomeHero1Component": HomeHero1Component,
    "ServicesTaComponent": ServicesTaComponent,
    "ServicesTaListComponent": ServicesTaListComponent,
    "ServicesSoxComponent": ServicesSoxComponent,
    "ServicesSoxListComponent": ServicesSoxListComponent,
    "ServicesItListComponent": ServicesItListComponent,
    "ServicesItComponent": ServicesItComponent,
    "ServicesRPAComponent": ServicesRPAComponent,
    "ServicesRPAListComponent": ServicesRPAListComponent,
    "ServicesStartupComponent": ServicesStartupComponent,
    "ServicesStartupListComponent": ServicesStartupListComponent,
    "ServicesAlchemyComponent": ServicesAlchemyComponent,
    "AboutUsComponent": AboutUsComponent
  };

  constructor(private route: ActivatedRoute, private resolver: ComponentFactoryResolver) {}

  ngOnInit() {
    this.layout = this.route.snapshot.data['layout'];
    this.buildPage();
  }

  getComponent(section: any) {
    if(section.type == 'projection') {
      if(section.props && section.props.componentName) {
        return this.layoutComponentsMap[section.props.componentName];
      }
    }
    return this.layoutComponentsMap[section.type];
  }

  buildPage() {
    this.layout.sections.forEach((section: any) => {
      switch (section.type) {
        case 'carousel': this.createComponent(this.getComponent(section), section);
        break;
        case 'projection': this.createComponent(this.getComponent(section), section);
        break;
        case 'leadership': this.createComponent(this.getComponent(section), section);
        break;
        case 'testimonial': this.createComponent(this.getComponent(section), section);
        break;
        case 'landing': this.createComponent(this.getComponent(section), section);
        break;
        case 'footer': this.createComponent(this.getComponent(section));
        break;
      }
    });
  }

  createComponent(component: any, section?: any) {
    const factory = this.resolver.resolveComponentFactory(component);
    const componentRef: any = this.container.createComponent(factory);
    if(section) {
       componentRef.instance.content = section;
    // componentRef.instance.class = data.class;
    }

  }
}
