import { Injectable } from '@angular/core';
import { throwError, timer } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RefillBalanceService {

  public processPayment(operatorId: number, phoneNumber: string, paymentAmount: number) {

    const successResponse$ = timer(2000)
      .pipe(map(() => `The payment for ${phoneNumber} on amount ${paymentAmount} RUB was successfully finished.`));

    const errorResponse$ = timer(2000)
      .pipe(switchMap(() => throwError(`Something went wrong. Please try again later.`)));

    return Math.random() > 0.5
      ? successResponse$
      : errorResponse$;
  }
}
