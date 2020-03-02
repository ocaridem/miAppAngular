import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trimestre'
})
export class TrimestrePipe implements PipeTransform {

  transform(value: Date, ...args: unknown[]): number {


    let trimestre:number;

    //VERSION 1
    /*
    switch (value.getMonth())
    {
      case 1: case 2: case 3:
        trimestre=1;
        break;
      case 4: case 5: case 6:
        trimestre=2;
        break;
      case 7: case 8: case 9:
        trimestre=3;
        break;
      case 10: case 11: case 12:
        trimestre=4;
        break;
    }
    */

    //VERSION 2
    trimestre=Math.floor( value.getMonth()/3)+1;

    return trimestre;
  }

}
