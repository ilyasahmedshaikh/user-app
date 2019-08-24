import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { PoliciesComponent } from './components/policies/policies.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { LoaderComponent } from './shared/loader/loader.component';
import { PopupComponent } from './shared/popup/popup.component';
import { SearchBarComponent } from './shared/search-bar/search-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    PoliciesComponent,
    SearchPageComponent,
    TestimonialsComponent,
    FooterComponent,
    HeaderComponent,
    LoaderComponent,
    PopupComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
