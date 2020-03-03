import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/model/producto';

@Component({
  selector: 'app-vending-machine',
  templateUrl: './vending-machine.component.html',
  styleUrls: ['./vending-machine.component.css']
})
export class VendingMachineComponent implements OnInit {

  constructor() { }

  intervalID:any=undefined;
  intervalCounter:number=undefined;
  productos:Producto[] = [];
  letra:string="";
  numero:number=undefined;
  mensaje:string="";

  ngOnInit(): void {

    //se añaden unos productos iniciales al array vacio

    //metodo PUSH para añadir elementos
    this.productos.push(new Producto("Frutos Secos",1.0,5,"A",5));
    this.productos.push(new Producto("Agua Lanjaron",1.2,24,"A",1));
    this.productos.push(new Producto("Palitos de cereales",3.02,25,"B",2));
    this.productos.push(new Producto("Donut de Chocolate",2.68,31,"C",10));
    this.productos.push(new Producto("Gominolas Haribo",5.15,20,"A",3));
  }

  comprar():void{

    let codigo:string=undefined;
    let productoEncontrado:boolean=false;

    if (this.letra!=="" && this.numero!==undefined){
      codigo=this.letra+this.numero;

      this.productos.forEach(element => {
        if (element.fila+element.codigo === codigo){
          productoEncontrado=true;

          //procedemos a rebajar el stock
          if (element.stock>0){
            element.stock-=1;
          }else{
            this.mensaje="No hay stock para este producto";
            //alert(this.mensaje); 
          }
        }
      });

      if (productoEncontrado === false){
        this.mensaje="No se ha localizado el producto indicado";
        //alert(this.mensaje);  
      }
    }else{
      this.mensaje="No se ha indicado letra i/o numero";
      //alert(this.mensaje);  
    }

    this.letra=undefined;
    this.numero=undefined;

    if (this.mensaje!==""){
        //VERSION 1
        //setTimeout( () => {this.mensaje="";},2000);

        //VERSION 2
        //2 Segundos
        this.intervalCounter=200;
        this.intervalID = setInterval(() => {
          this.intervalCounter-=1;
          if (this.intervalCounter===0){
            this.mensaje="";
            this.intervalCounter=undefined;
            clearInterval(this.intervalID);
          }
        }, 10);



        
    }

  }


}
