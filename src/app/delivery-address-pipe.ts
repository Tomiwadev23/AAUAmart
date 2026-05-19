import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'deliveryAddress'
})
export class DeliveryAddressPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
