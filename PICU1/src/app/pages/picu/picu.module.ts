import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PicuPageRoutingModule } from './picu-routing.module';

import { PicuPage } from './picu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PicuPageRoutingModule
  ],
  declarations: [PicuPage]
})
export class PicuPageModule {}
