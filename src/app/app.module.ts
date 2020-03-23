import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsInfoComponent } from './events-info/events-info.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {EventsinfoModule} from './events-info/events-info.module';

import {CommonsModule} from './common/commons.module';

import { BirthdayComponent } from './events-info/birthday/birthday.component';
import { SeminarComponent } from './events-info/seminar/seminar.component';
import { WeddingComponent } from './events-info/wedding/wedding.component';
import { MaterialModule } from './material.module';
import { HomeComponent } from './events-info/home/home.component';
import { FooterComponent } from './common/footer/footer.component';
import { WeddingFormComponent } from './forms/wedding-form/wedding-form.component';
import { FormsComponent } from './forms/forms.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EventsInfoComponent,
    HomeComponent,
    BirthdayComponent,
    SeminarComponent,
    WeddingComponent,FooterComponent, WeddingFormComponent, FormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    EventsinfoModule,
    MaterialModule,
    CommonsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
