import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date'
})
export class NgxDatePipe implements PipeTransform {

  constructor() {}

  transform(value: Date, pattern: string = 'fullDate'): any {
    const datePipe = new DatePipe('en-US');
    return datePipe.transform(value, pattern);
  }
}
