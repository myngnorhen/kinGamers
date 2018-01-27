import { ElementosDeCenaComponent } from './elementos-de-cena/elementos-de-cena.component';
import { ElementosCenaServiceService } from './elementos-de-cena/elementos-cena-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cena',
  templateUrl: './cena.component.html',
  styleUrls: ['./cena.component.css']
})
export class CenaComponent implements OnInit {
  listaDeElementos:any;
  constructor(public elemCena:ElementosCenaServiceService) {
    this.listaDeElementos=this.elemCena.getElementos();   

   }

  ngOnInit() {
   
  }

}
