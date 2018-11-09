import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { InlineComponent } from './inline/inline.component';
import { OfflineComponent } from './offline/offline.component';

import {ServicioGlobalService} from './servicio-global.service'

@NgModule({
  declarations: [
    AppComponent,
    InlineComponent,
    OfflineComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ServicioGlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
