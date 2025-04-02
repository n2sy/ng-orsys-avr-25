import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'short',
  standalone: false,
})
export class ShortPipe implements PipeTransform {
  transform(value: string): string {
    return null;
  }
}
