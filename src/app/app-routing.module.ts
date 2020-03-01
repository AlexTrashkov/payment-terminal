import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/telecom-operators/telecom-operators.module').then(m => m.TelecomOperatorsModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('./features/refill-balance/refill-balance.module').then(m => m.RefillBalanceModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
