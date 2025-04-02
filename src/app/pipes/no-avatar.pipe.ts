import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noAvatar',
  standalone: false,
})
export class NoAvatarPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return 'avatar.jpg';
    return value;
  }
}
