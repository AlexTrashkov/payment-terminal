import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { TelecomOperatorsRoutingModule } from './telecom-operators-routing.module';
import { TelecomOperatorsComponent } from './telecom-operators.component';


@NgModule({
  declarations: [TelecomOperatorsComponent],
  imports: [
    SharedModule,
    TelecomOperatorsRoutingModule
  ]
})
export class TelecomOperatorsModule { }
