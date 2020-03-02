import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-showcase',
  templateUrl: './pipe-showcase.component.html',
  styleUrls: ['./pipe-showcase.component.css']
})
export class PipeShowcaseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  nombre="Pepín";
  titulo="el maravilloso mundo de los peces";

  fecha1:Date=new Date(); //Ahora
  fecha2= new Date(2020,8,15); //Definimos año mes y dia  (el mes es -1   es en  Base 0)

  importe=456.95;

  num1=0.123456;
  num2=12345.12345;

}
