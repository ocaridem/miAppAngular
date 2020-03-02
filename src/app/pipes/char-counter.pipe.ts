import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'charcounter'
})
export class CharCounterPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): number {

    return value.length;
  }

}
