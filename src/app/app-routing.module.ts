import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchPageComponent } from './components/search-page/search-page.component';
import { AboutComponent } from './components/about/about.component';
import { UserListComponent } from './components/user-list/user-list.component';


const routes: Routes = [
  { path: 'search', component: SearchPageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'users-listing', component: UserListComponent },

  // default route
  { path: '',   redirectTo: '/search', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
