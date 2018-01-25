import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CenaComponent } from './cena.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CenaComponent],
  exports:[CenaComponent]
})
export class CenaModule { }
