import { Component, OnInit } from '@angular/core';
import { ClientePaisesService } from 'src/app/services/cliente-paises.service';

@Component({
  selector: 'app-cliente-paises',
  templateUrl: './cliente-paises.component.html',
  styleUrls: ['./cliente-paises.component.css']
})
export class ClientePaisesComponent implements OnInit {

  texto:string=undefined;
  paises:any[]=undefined;
  pais:any=undefined;
  nombre:string=undefined;

  constructor(private clienteService:ClientePaisesService) { }

  //se ejecuta automaticamente al iniciarse el componente
  ngOnInit(): void {

    this.texto=this.clienteService.getNombre();

    //al hacer un subscribe, eso hace que al recibir la informacion, se ejecuta un accion (funcion)
    this.clienteService.getAll().subscribe(x => {
      console.log(x);
      this.paises=x;
    });
  }


  buscar():void{
    this.clienteService.getByPais(this.nombre).subscribe(x => {
      console.log(x);
      this.pais=x;
    });
  }

}
