import { Component, OnInit } from '@angular/core';
import { ConversorTemperaturaService } from 'src/app/services/conversor-temperatura.service';

@Component({
  selector: 'app-conversor-grados',
  templateUrl: './conversor-grados.component.html',
  styleUrls: ['./conversor-grados.component.css']
})
export class ConversorGradosComponent implements OnInit {

  //la manera de inyectar es SIEMPRE en el Constructor
  constructor(private conversorTemperaturaService:ConversorTemperaturaService) { }

  ngOnInit(): void {
  }


  numero:number=10;
  grados1:string="Celsius";
  grados2:string="";
  calculo:number=0;
  resultado:string="";

  comprobar():void{



    //VERSION 1
    //Sin Servicios
    /*

    if (this.grados1==="Celsius"){
      if (this.grados2==="Celsius"){this.calculo=this.numero;}
      if (this.grados2==="Farenheit"){
          //C a F -> ºF = (ºC · 1,8) + 32
          this.calculo=((this.numero*1.8)+32)
      }
      if (this.grados2==="Kelvin"){
          //C a K -> K = 273.15 + C
          this.calculo=(this.numero+273.15)
      }
    }

    if (this.grados1==="Farenheit"){
      if (this.grados2==="Celsius"){
          //F a C -> ºC = (ºF -32) / 1,8
          this.calculo=(( this.numero-32)/1.8)
      }
      if (this.grados2==="Farenheit"){this.calculo=this.numero;}
      if (this.grados2==="Kelvin"){
          //F a K -> k=((F-32)/1.8)+273.15
          this.calculo=((this.numero-32)/1.8)+273.15
      }
    }

    if (this.grados1==="Kelvin"){
      if (this.grados2==="Celsius"){
          //K a C -> C = K - 273.15
          this.calculo=(this.numero-273.15)
      }
      if (this.grados2==="Farenheit"){
          //K a F ->  F=((K-273.15)*1.8)+32
          this.calculo=((this.numero-273.15)*1.8)+32
      }
      if (this.grados2==="Kelvin"){this.calculo=this.numero;}
    }
    */

    //VERSION 2
    //utilizamos el servicio generado services/conversorTemperaturaService
    this.calculo=this.conversorTemperaturaService.convertir(this.numero,this.grados1,this.grados2);

    this.resultado=""+this.calculo
    
  }

  
  
  
  
  
 



}
