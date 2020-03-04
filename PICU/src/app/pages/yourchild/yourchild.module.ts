import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YourchildPageRoutingModule } from './yourchild-routing.module';

import { YourchildPage } from './yourchild.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YourchildPageRoutingModule
  ],
  declarations: [YourchildPage]
})
export class YourchildPageModule {}
