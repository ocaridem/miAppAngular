import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list1',
  templateUrl: './list1.component.html',
  styleUrls: ['./list1.component.css']
})
export class List1Component implements OnInit {

  //si no interesa que podria quitar el constructor y el OnInit

  constructor() { }

  ngOnInit(): void {
  }


  //lista de nombres
  nombres:string[] = ["Pepin","Honorio","Anna","Carlota"];
  nuevoNombre:string = undefined;

  insert():void{
    this.nombres.push(this.nuevoNombre);
    this.nuevoNombre=undefined;
  }

}
