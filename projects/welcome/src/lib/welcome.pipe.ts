import { Pipe, PipeTransform } from '@angular/core';
/*
 * Extract the first characters from a sentence
 * Takes an max length argument that defaults to 1.
 * Usage:
 *   value | appName:length
 * Example:
 *   {{ Hello World | appName:10 }}
 *   formats to: HW
*/

@Pipe({name: 'appName'})
export class AppNamePipe implements PipeTransform {
  transform(value: string, length?: number): string {
      if(value){
        return value.split(' ').map(str => str.charAt(0)).join('').toUpperCase().substring(0,length?length:1);
      }
    return value;
  }
}