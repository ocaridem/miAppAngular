import { Component } from '@angular/core';

interface SituacionLaboral{
  value:number,
  viewValue:string
}

@Component({
  selector: 'app-material3',
  templateUrl: './material3.component.html',
  styleUrls: ['./material3.component.css']
})
export class Material3Component {

  nombre = "Pepín";
  apellido1 = "Gálvez";
  apellido2 = "Ridruejo";
  
  fechaNacimiento:Date = new Date(2020,0,1);

  //es para un posible combo en angular (NO ESTA HECHO)
  situacionLaboral:SituacionLaboral[] = [
    {value:1,viewValue:"Desempleado"},
    {value:2,viewValue:"Empleado cuenta ajena"},
    {value:3,viewValue:"Autonomo"},
    {value:4,viewValue:"Otra ... "}
  ];

}
