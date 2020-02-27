import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConversorTemperaturaService {

  constructor() { }

  convertir(numero:number, grados1:string, grados2:string):number{

    var calculo:number=0;

    if (grados1==="Celsius"){
      if (grados2==="Celsius"){calculo=numero;}
      if (grados2==="Farenheit"){
          //C a F -> ºF = (ºC · 1,8) + 32
          calculo=((numero*1.8)+32)
      }
      if (grados2==="Kelvin"){
          //C a K -> K = 273.15 + C
          calculo=(numero+273.15)
      }
    }

    if (grados1==="Farenheit"){
      if (grados2==="Celsius"){
          //F a C -> ºC = (ºF -32) / 1,8
          calculo=(( numero-32)/1.8)
      }
      if (grados2==="Farenheit"){calculo=numero;}
      if (grados2==="Kelvin"){
          //F a K -> k=((F-32)/1.8)+273.15
          calculo=((numero-32)/1.8)+273.15
      }
    }

    if (grados1==="Kelvin"){
      if (grados2==="Celsius"){
          //K a C -> C = K - 273.15
          calculo=(numero-273.15)
      }
      if (grados2==="Farenheit"){
          //K a F ->  F=((K-273.15)*1.8)+32
          calculo=((numero-273.15)*1.8)+32
      }
      if (grados2==="Kelvin"){calculo=numero;}
    }

    return calculo;
  }
}
