import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'short',
  standalone: false,
})
export class ShortPipe implements PipeTransform {
  transform(value: string, nbMax: number): string {
    if (value.length < nbMax) return value;
    else return `${value.substring(0, nbMax)}...`;
  }
}
