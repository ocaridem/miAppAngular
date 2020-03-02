import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverser'
})
export class ReverserPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {

    let splitstring = value.split("");//creo un array
    let reverseArray = splitstring.reverse(); //el array tiene un metodo de revertir

    return reverseArray.join(""); //devulevo el array "rejuntado" como string
  }

}
