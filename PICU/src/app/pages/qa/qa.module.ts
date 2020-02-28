import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QAPageRoutingModule } from './qa-routing.module';

import { QAPage } from './qa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QAPageRoutingModule
  ],
  declarations: [QAPage]
})
export class QAPageModule {}
