import { Component } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

export interface Producto{
  codigo:number;
  nombre:string;
  precio:number;
  fechaAlta:Date;
}

const PRODUCTOS:Producto[]=[
  {codigo:100,nombre:"ProductoA",precio:100.3, fechaAlta:new Date(2020,0,7)},
  {codigo:105,nombre:"ProductoB",precio:10.8, fechaAlta:new Date(2020,10,2)},
  {codigo:167,nombre:"ProductoC",precio:45.0, fechaAlta:new Date(2019,5,4)},
  {codigo:100,nombre:"ProductoD",precio:87.2, fechaAlta:new Date(2020,10,12)},
  {codigo:255,nombre:"ProductoE",precio:2500.0, fechaAlta:new Date(2020,9,21)},
  {codigo:422,nombre:"ProductoF",precio:345.3, fechaAlta:new Date(2020,1,13)}
  ];

@Component({
  selector: 'app-material1v2',
  templateUrl: './material1v2.component.html',
  styleUrls: ['./material1v2.component.css']
})
export class Material1v2Component {

   //creamos un array con los nombres de que conforman la interficie Producto
   displayedColumns:string[]=['codigo','nombre','precio','fechaAlta'];
   //ponemos el contenido de Productos
   dataSource = new MatTableDataSource(PRODUCTOS);
  
   applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
