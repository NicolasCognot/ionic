import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VtubersListPage } from './vtubers-list.page';

const routes: Routes = [
  {
    path: '',
    component: VtubersListPage
  },
  {
    path: 'new',
    loadChildren: () => import('./vtuber-new/vtuber-new.module').then( m => m.VtuberNewPageModule)
  },
  {
    path: ':id',
    loadChildren: () => import('./vtuber/vtuber.module').then( m => m.VtuberPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VtubersListPageRoutingModule {}
