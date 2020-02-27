import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reloj',
  templateUrl: './reloj.component.html',
  styleUrls: ['./reloj.component.css']
})
export class RelojComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  startEnabled:boolean=true;
  pauseEnabled:boolean=false;
  resumeEnabled:boolean=false;
  invertEnabled:boolean=false;
  resetEnabled:boolean=false;

  // variables de instancia...
  //var audio = new Audio('sound/alarm.mp3');
  //this.alarm=20; 
  //this.alarmSound=5;

  nombre:string="Seiko";
  interval_ID:any = undefined;
  totalSegundos:number = 0;

  dias:number = 0;
  horas:number = 0;
  minutos:number = 0;
  segundos:number = 0;

  sentidoInvert:number=1;

  digitacion:string="";

  start():void{
    this.startEnabled=false;
    this.pauseEnabled=true;
    this.resumeEnabled=false;
    this.invertEnabled=true;
    this.resetEnabled=true;


    this.interval_ID = setInterval(()=> {

      // TODO 1 El tiempo se debe mostrar en formato 00:00:00 
     // Seiko 00:00:59
     // Seiko 00:01:00

     this.dias=Math.floor(this.totalSegundos/86400);
     this.horas=Math.floor( (this.totalSegundos-(this.dias*86400))/3600 );
     this.minutos=Math.floor( (this.totalSegundos-(this.dias*86400)-(this.horas*3600))/60 );
     this.segundos=(this.totalSegundos-(this.dias*86400)-(this.horas*3600)-(this.minutos*60) );

     this.digitacion="   Dia " + this.dias + "  ->  [ "+ (this.horas<10? "0":"") + this.horas + ":" + (this.minutos<10? "0":"") + this.minutos + ":" + (this.segundos<10? "0":"") + this.segundos + " ]";

     console.log(this.nombre + " " + this.digitacion);
     if (! ((this.totalSegundos===0) && (this.sentidoInvert===-1)) )
     {
         this.totalSegundos += this.sentidoInvert;
     }
  }, 100); 
  }


  pause(){
    this.startEnabled=false;
    this.pauseEnabled=false;
    this.resumeEnabled=true;
    this.invertEnabled=true;
    this.resetEnabled=true;

    // TODO 2   Que la pausa funcione!!!
    clearInterval(this.interval_ID);
  }

  resume(){
    this.startEnabled=false;
    this.pauseEnabled=true;
    this.resumeEnabled=false;
    this.invertEnabled=true;
    this.resetEnabled=true;

    // TODO 3   Que el resume funcione!!!
    this.start();
  }

  invert(){
    // TODO 4 Que el invert funcione!!!!
    this.sentidoInvert *= -1
  }

  reset(){
    this.totalSegundos=0;
    this.sentidoInvert=1;

    //this.pause();
  }




}
