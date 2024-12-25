import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesTaComponent } from './pages/services-ta/services-ta.component';
import { ServicesComponent } from './pages/services/services.component';
import { ViewportScroller } from '@angular/common';

const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {
  constructor(private viewportScroller: ViewportScroller) {
    this.viewportScroller.setOffset([0, 0]);
  }
}
