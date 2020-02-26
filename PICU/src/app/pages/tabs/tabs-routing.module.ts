import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../home/home.module').then(m => m.HomePageModule)
          },{
            path: 'picu',
            loadChildren: () =>
              import('../picu/picu.module').then(m => m.PicuPageModule)
          }
        ]
      },
      {
        path: 'picu',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../picu/picu.module').then(m => m.PicuPageModule)
          }
        ]
      },
      {
        path: 'yourchild',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../yourchild/yourchild.module').then(m => m.YourchildPageModule)
          }
        ]
      },
      {
        path: 'team',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../team/team.module').then(m => m.TeamPageModule)
          }
          , {
            path: 'team-detail',
            loadChildren: () => import('../team-detail/team-detail.module').then( m => m.TeamDetailPageModule)
          }
        ]
      },
      {
        path: 'visit',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../visit/visit.module').then(m => m.VisitPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
