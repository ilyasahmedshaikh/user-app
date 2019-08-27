import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchPageComponent } from './components/search-page/search-page.component';
import { AboutComponent } from './components/about/about.component';


const routes: Routes = [
  { path: 'search', component: SearchPageComponent },
  { path: 'about', component: AboutComponent },

  // default route
  { path: '',   redirectTo: '/search', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
