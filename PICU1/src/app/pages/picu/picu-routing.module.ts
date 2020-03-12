import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PicuPage } from './picu.page';

const routes: Routes = [
  {
    path: '',
    component: PicuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PicuPageRoutingModule {}
