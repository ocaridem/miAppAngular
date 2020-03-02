//ng g c components/conversor-divisas
import { Component, OnInit } from '@angular/core';

const FACTOR_DIVISAS={
  Euro:1,
  Franco_Suizo:0.76899,
  Dolar : 1.23216,
  Yen_Japones : 120.598,
  Rupia_India : 81.3692
}

@Component({
  selector: 'app-conversor-divisas',
  templateUrl: './conversor-divisas.component.html',
  styleUrls: ['./conversor-divisas.component.css']
})
export class ConversorDivisasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  numeroA:number=1;
  numeroB:number=1;
  monedaA:string="Euro";
  monedaB:string="Euro";

  comprobar(origen:string):void{
    
      if (origen === 'A'){
        //A
        let euro = this.numeroB * FACTOR_DIVISAS[this.monedaB];
        this.numeroA = euro / FACTOR_DIVISAS[this.monedaA];
      } else {
        //B
        let euro = this.numeroA * FACTOR_DIVISAS[this.monedaA];
        this.numeroB = euro / FACTOR_DIVISAS[this.monedaB];
      }
  }
}

