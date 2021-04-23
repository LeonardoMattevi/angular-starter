import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'reverseString'})
export class ReverseString implements PipeTransform {
  transform(value: string): string {
    return value.split('').reverse().join('');
  }
}