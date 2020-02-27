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

@NgModule({
  declarations: [AppComponent, CalculatorComponent, RelojComponent, BoxComponent, ConversorGradosComponent], //aqui van los "Component"
  imports:      [BrowserModule,FormsModule], //FormsModule es para hacer 2-way databinding
  providers:    [ConversorTemperaturaService], //aqui van los "Injectable"
  bootstrap:    [AppComponent]
})
export class AppModule { }
