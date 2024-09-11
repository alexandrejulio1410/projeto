import { Component } from '@angular/core';

@Component ({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nome:string = 'cleyton'
  idade= 25


  constructor() {}

  imprime(){
    return "acorda"
  }
  cor = 'red'
  texto(){
    if(this.cor=='red'){
      this.cor='blue'
    }else{
      this.cor='red'
    }
   
  }
  guardaTexto = ''

  escreve(valor:string){
    console.log(valor)
    this.guardaTexto= valor
  }
  modo(value:string){
    this.cor = value
  }
}
