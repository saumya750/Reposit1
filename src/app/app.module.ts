import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsInfoComponent } from './events-info/events-info.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {EventsinfoModule} from './events-info/events-info.module';
import {MatCardModule,MatIconModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    EventsInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    EventsinfoModule,
    MatCardModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
