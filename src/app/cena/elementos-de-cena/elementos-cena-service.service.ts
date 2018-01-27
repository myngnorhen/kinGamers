import { Injectable } from '@angular/core';

@Injectable()
export class ElementosCenaServiceService {

  constructor() { 
    
  }
  getElementos(){
    return [
      {"nomeElemento":"nome1"},
      {"nomeElemento":"nomle2"},
      {"nomeElemento":"nome3"}
    ];
  }
 
}
