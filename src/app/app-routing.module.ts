import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { StaticComponentComponent } from './static-component/static-component.component';
import { DynamicComponentComponent } from './dynamic-component/dynamic-component.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'static',
    component: StaticComponentComponent,
    data: { id: '1', name: 'Angular' },
  },
  { path: 'dynamic', component: DynamicComponentComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
