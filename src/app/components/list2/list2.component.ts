import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/model/producto';

@Component({
  selector: 'app-list2',
  templateUrl: './list2.component.html',
  styleUrls: ['./list2.component.css']
})
export class List2Component implements OnInit {
  
  productos:Producto[] = [];

  ngOnInit(): void {

    //se añaden unos productos iniciales al array vacio

    //metodo PUSH para añadir elementos
    this.productos.push(new Producto("Frutos Secos",1.0,22));
    this.productos.push(new Producto("Agua Lanjaron",1.2,24));
    this.productos.push(new Producto("Palitos de cereales",3.02,25));
    this.productos.push(new Producto("Donut de Chocolate",2.68,31));
    this.productos.push(new Producto("Gominolas Haribo",5.15,20));
    
  }

}

