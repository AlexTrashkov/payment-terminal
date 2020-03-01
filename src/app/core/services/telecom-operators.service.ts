import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { delay, shareReplay, map } from 'rxjs/operators';
import { TelecomOperator } from '../models/telecom-operator';
import { telecomOperatorsListMock } from '../mocks/telecom-operators-list.mock';

@Injectable({
  providedIn: 'root'
})
export class TelecomOperatorsService {

  public operators$: Observable<TelecomOperator[]> = of(telecomOperatorsListMock).pipe(
    delay(2000),
    shareReplay(1),
  );

  public getOperatorByName(operatorName: string) {
    return this.operators$.pipe(
      map((operators) => operators.find((operator) => operator.name === operatorName))
    );
  }
}
