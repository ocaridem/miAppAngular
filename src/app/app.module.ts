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

//servicios
import { ConversorTemperaturaService} from './services/conversor-temperatura.service';
import { ConversorDivisasComponent } from './components/conversor-divisas/conversor-divisas.component';
import { PipeShowcaseComponent } from './components/pipe-showcase/pipe-showcase.component';
import { CharCounterPipe } from './pipes/char-counter.pipe';
import { ReverserPipe } from './pipes/reverser.pipe';
import { TrimestrePipe } from './pipes/trimestre.pipe';
import { List1Component } from './components/list1/list1.component';
import { List2Component } from './components/list2/list2.component';
import { VendingMachineComponent } from './components/vending-machine/vending-machine.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, CalculatorComponent, RelojComponent, BoxComponent, ConversorGradosComponent, ConversorDivisasComponent, PipeShowcaseComponent, CharCounterPipe, ReverserPipe, TrimestrePipe, List1Component, List2Component, VendingMachineComponent], //aqui van los "Component"
  imports:      [BrowserModule,FormsModule, BrowserAnimationsModule], //FormsModule es para hacer 2-way databinding
  providers:    [ConversorTemperaturaService], //aqui van los "Injectable"
  bootstrap:    [AppComponent]
})
export class AppModule { }
