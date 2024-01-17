import { CommonModule } from '@angular/common';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';
import { AppRoutingModule } from '../app/app-routing.module'
import { AppComponent } from '../app/app.component';
import { FaceSnap2Component } from '../app/face-snap2/face-snap2.component';
import { FaceSnapListComponent } from '../app/face-snap-list/face-snap-list.component';
import { HeaderComponent } from '../app/header/header.component';
import { FaceSnapsService } from '../app/services/face-snap-services';

@NgModule({

    

    imports: [
      CommonModule , 
      BrowserModule,
      AppRoutingModule,
      FaceSnapsService,
    ],

  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR'}
  ],

})

export class FaceSnap3 {
    id! : number;
    title!: string;
    description!: string;
    imageUrl!: string;
    createdDate!: Date;
    snaps!: number;
    location?: string;
    constructor() {
      registerLocaleData(fr.default);
    }
  }
  