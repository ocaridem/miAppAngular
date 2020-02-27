import { Component } from '@angular/core';

@Component({
    selector: 'app-box',
    templateUrl: './box.component.html',
    styleUrls: ['./box.component.css']
  })
 export class BoxComponent{
        
  tituloBox="Component BOX";
  nombre="Bartolo";
  numero=20;
  recibirPropaganda=true;
  fechaAlta:Date = new Date(); //no me muestra esta variable por el formato del Date, se tendria que definir como YYYY-MM-dd
  fechaStr:string="2020-01-15";
  ciudadSeleccionada:string = undefined;


  duplicar():void{
    this.nombre+=this.nombre;
  }

  cambioSelector():void{
    this.numero--;
    console.log("La ciudad es : "+ this.ciudadSeleccionada);
  }
 }