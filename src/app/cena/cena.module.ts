import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CenaComponent } from './cena.component';
import { ElementosDeCenaComponent } from './elementos-de-cena/elementos-de-cena.component';
import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatSidenavModule}from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule
  ],
  declarations: [CenaComponent, ElementosDeCenaComponent],
  exports:[CenaComponent]

})
export class CenaModule { }
