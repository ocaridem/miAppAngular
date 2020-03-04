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

  situacionLaboral:SituacionLaboral[] = [
    {value:1,viewValue:"Desempleado"},
    {value:2,viewValue:"Empleado cuenta ajena"},
    {value:3,viewValue:"Autonomo"},
    {value:4,viewValue:"Otra ... "}
  ];

}
