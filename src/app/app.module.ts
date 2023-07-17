import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LightDarkModeComponent } from './light-dark-mode/light-dark-mode.component';
import { LightDarkModeService } from './shared/light-dark-mode.service';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';
import { ExamplesComponent } from './examples/examples.component';
import { OrderByPipe } from './shared/order-by.pipe';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GridModule } from '@progress/kendo-angular-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LightDarkModeComponent,
    HomeComponent,
    FooterComponent,
    AboutMeComponent,
    ExperienceComponent,
    ContactComponent,
    ExamplesComponent,
    OrderByPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    GridModule,
    BrowserAnimationsModule,
  ],
  providers: [LightDarkModeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
