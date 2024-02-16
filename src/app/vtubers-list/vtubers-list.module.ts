import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VtubersListPageRoutingModule } from './vtubers-list-routing.module';

import { VtubersListPage } from './vtubers-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VtubersListPageRoutingModule
  ],
  declarations: [VtubersListPage]
})
export class VtubersListPageModule {}
