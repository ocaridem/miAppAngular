import { Component } from '@angular/core';


@Component({  //las {} hace referencia a que es un "objeto"
  selector: 'app-root',    //este selector aparece en index.html   el nombre NO tiene porque ser "app.root", puede ser cualquier nombre
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] //es un array de hojas de estilos. En este caso solo hay una.
})

/*
@Component({ 
  selector : 'app-root',
  template: `<h1>Ejemplo</h1>`,
  styles: ['./app.component.css']
})
*/
export class AppComponent {
    // title = 'miApp';

    titulo:string = " Proyecto COMPONENTES";
    numero:number = 77;

    incrementar= function(){
      this.numero++;
    }

    /*
    decrementar = function(){
      this.numero--;
    }
    */
    decrementar = () => this.numero--;
}
