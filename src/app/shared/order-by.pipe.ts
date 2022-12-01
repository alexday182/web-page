import { Pipe, PipeTransform } from '@angular/core';
import { orderBy } from 'lodash';

@Pipe({
  name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {
  transform(value: any[], order: any, column: string = ''): any[] {
    if (!value || order === '' || !order) {
      return value;
    }
    if (value.length <= 1) {
      return value;
    }
    if (!column || column === '') {
      if (order === 'asc') {
        return value.sort();
      } else {
        return value.sort().reverse();
      }
    }
    return orderBy(value, [column], [order]);
  }
}
/*
 *ngFor="let c of oneDimArray | sortBy:'asc'"
 *ngFor="let c of arrayOfObjects | sortBy:'asc':'propertyName'"
 */
