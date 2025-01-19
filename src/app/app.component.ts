import { Component, HostListener, OnInit } from '@angular/core';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { Router, Routes, Scroll } from '@angular/router';
import { RenderLayoutComponent } from './components/render-layout/render-layout.component';
import AOS from 'aos';
import { DataService } from './services/data.service';
import { filter } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {


  isSticky: boolean = false;
  persona: any;
  constructor(private router: Router, private dataservice: DataService) {
    AOS.init();
    this.persona = this.dataservice.getPersonaData();
    this.router.events
      .pipe(filter((e) => e instanceof Scroll))
      .subscribe((e: any) => {
        if (e.anchor) {
          const element = document.getElementById(e.anchor);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      });
  }


  ngOnInit() {
    this.persona.layout.forEach((layout: any) => {
      this.addRoutes(layout.routes);
    });
  }

  componentsMap: { [key: string]: any } = {
    Header: HeaderComponent,
    Footer: FooterComponent,
  };
  getComponentName(template: string): any {
    return this.componentsMap[template];
  }

  getHeaderComponent() {
    return this.componentsMap['Header'];
  }
  getFooterComponent() {
    return this.componentsMap['Footer'];
  }

  addRoutes(routesConfig: any[]) {
    const dynamicRoutes: Routes = routesConfig.map((route) => {
      if(route.children && route.children.length) {
        let proute = {
          path: route.path,
          children: []
        };
        let childRouteArr: any = [];
        route.children.forEach((child: any) => {
          if(child.default) {
            childRouteArr.push({
              path: '',
              redirectTo: child.path,
              pathMatch: 'full'
            });
          }
          childRouteArr.push({
            path: child.path,
            component: RenderLayoutComponent,
            data: { layout: child.layout}
          })
        })

        proute = {
          ...proute,
          children: childRouteArr
        }
        return proute;
      } else {
        return {
          path: route.path,
          component: RenderLayoutComponent,
          data: { layout: route.layout },
        };
      }
    });
    this.router.resetConfig([...this.router.config, ...dynamicRoutes]);
  }
}
