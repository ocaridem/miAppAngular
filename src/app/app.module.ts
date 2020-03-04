//decorador
import { NgModule } from '@angular/core';

//modulos
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//componentes
import { AppComponent } from './app.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { RelojComponent } from './components/reloj/reloj.component';
import { BoxComponent } from './components/box/box.component';
import { ConversorGradosComponent } from './components/conversor-grados/conversor-grados.component';
import { ConversorDivisasComponent } from './components/conversor-divisas/conversor-divisas.component';
import { PipeShowcaseComponent } from './components/pipe-showcase/pipe-showcase.component';
import { List1Component } from './components/list1/list1.component';
import { List2Component } from './components/list2/list2.component';
import { VendingMachineComponent } from './components/vending-machine/vending-machine.component';

import { Material1Component } from './components/material1/material1.component';
import { Material2Component } from './components/material2/material2.component';
import { Material1v2Component } from './components/material1v2/material1v2.component';
import { Material3Component } from './components/material3/material3.component';

//servicios
import { ConversorTemperaturaService} from './services/conversor-temperatura.service';

//pipes
import { CharCounterPipe } from './pipes/char-counter.pipe';
import { ReverserPipe } from './pipes/reverser.pipe';
import { TrimestrePipe } from './pipes/trimestre.pipe';

//material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';


//Se añade un Modulo Propio que contiene otras importaciones de Modulos
//import { MaterialModule } from './modules/material/material.module';




@NgModule({
  declarations: [AppComponent, CalculatorComponent, RelojComponent, BoxComponent, ConversorGradosComponent, ConversorDivisasComponent, PipeShowcaseComponent, CharCounterPipe, ReverserPipe, TrimestrePipe, List1Component, List2Component, VendingMachineComponent, Material1Component, Material2Component, Material1v2Component, Material3Component], //aqui van los "Component"
  imports:      [BrowserModule,FormsModule, BrowserAnimationsModule,MatTableModule,MatCardModule,MatInputModule], //FormsModule es para hacer 2-way databinding
  providers:    [ConversorTemperaturaService], //aqui van los "Injectable"
  bootstrap:    [AppComponent]
})
export class AppModule { }
