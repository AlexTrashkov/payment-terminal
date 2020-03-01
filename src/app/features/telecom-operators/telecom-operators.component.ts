import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TelecomOperatorsService } from 'src/app/core/services/telecom-operators.service';

@Component({
  selector: 'app-telecom-operators',
  templateUrl: './telecom-operators.component.html',
  styleUrls: ['./telecom-operators.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TelecomOperatorsComponent {

  public operators$ = this.telecomOperatorsService.operators$;

  constructor(private telecomOperatorsService: TelecomOperatorsService) { }

}
