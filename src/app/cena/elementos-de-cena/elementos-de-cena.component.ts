import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core/src/metadata/directives';

@Component({
  selector: 'app-elementos-de-cena',
  templateUrl: './elementos-de-cena.component.html',
  styleUrls: ['./elementos-de-cena.component.css']
})
export class ElementosDeCenaComponent implements OnInit {
  tituloElemento:string;
  subElemento:string;
  imgElemento:string;
  constructor() {
  
 
   }
   getTitulo(titulo){
    this.tituloElemento=titulo;
   }
  ngOnInit() {

  }
  @Input()
  elemento:elemento;
}
