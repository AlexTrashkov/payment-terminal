import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxMaskModule } from 'ngx-mask';

import { RefillBalanceRoutingModule } from './refill-balance-routing.module';
import { RefillBalanceComponent } from './refill-balance.component';


@NgModule({
  declarations: [RefillBalanceComponent],
  imports: [
    SharedModule,
    NgxMaskModule.forRoot(),
    RefillBalanceRoutingModule
  ]
})
export class RefillBalanceModule { }
