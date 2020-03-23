

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';


import { EventsinfoRoutingModule } from './events-info-routing.module';
import { CommonsModule } from '../common/commons.module';





@NgModule({
    declarations: [
      
    ],
    imports: [
      BrowserModule,
      BrowserAnimationsModule,
      EventsinfoRoutingModule,
      CommonsModule
    
    ],
    providers: [],
    
  })
  export class EventsinfoModule { }