import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() { } //se utiliza principal para inyeccion de dependencias

  ngOnInit(): void { // es como un metodo Post - constructor   equivalente al load de .NET 
  }




  texto:string="";
  display:number = 0;

  operando1:number = null;
  operando2:number = null;
  numeroAux:number=0;

  ultimaOperacion:string = "";

  botonClear():void{
    this.texto="";
    this.numeroAux=0
    this.operando1=null;
    this.operando2=null;
    this.display=0;
  }
  botonSumar():void{
    this.operacion("+");
  }
  botonRestar():void{
    this.operacion("-");
  }
  botonIgual():void{
    if (this.ultimaOperacion===""){this.display=this.numeroAux;}
    if (this.ultimaOperacion==="+"){ this.display=this.operando1+this.numeroAux;}
    if (this.ultimaOperacion==="-"){ this.display=this.operando1-this.numeroAux;}
  }

 
  operacion(op:string):void{
    this.texto +=op;
    
    if (this.operando1 == null){
      this.operando1 = this.numeroAux;
      this.numeroAux=0;
    }else{
      this.operando2 = this.numeroAux;
      this.numeroAux=0;
      if (this.ultimaOperacion==="+"){ this.operando1=this.operando1 + this.operando2;}
      if (this.ultimaOperacion==="-"){ this.operando1=this.operando1 - this.operando2;}
    }
    this.ultimaOperacion=op;
  }

  boton(cifra:number):void{
    this.texto += cifra;
    this.numeroAux = this.numeroAux * 10 + cifra;
  }
}