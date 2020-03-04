import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YourchildPage } from './yourchild.page';

const routes: Routes = [
  {
    path: '',
    component: YourchildPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YourchildPageRoutingModule {}
