import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelecomOperatorsComponent } from './telecom-operators.component';

const routes: Routes = [{ path: '', component: TelecomOperatorsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TelecomOperatorsRoutingModule { }
