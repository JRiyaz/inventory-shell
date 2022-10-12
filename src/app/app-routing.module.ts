import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationLayoutComponent } from './authentication-layout/authentication-layout.component';
import { CommonLayoutComponent } from './common-layout/common-layout.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: CommonLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      {
        path: 'dashboard', loadChildren: () =>
          loadRemoteModule({
            type: 'manifest',
            remoteName: 'inventory',
            exposedModule: './dashboard'
          })
            .then(m => m.DashboardModule)
      }
    ]
  },
  {
    path: 'user', component: AuthenticationLayoutComponent, children: [{
      path: '', loadChildren: () =>
        loadRemoteModule({
          type: 'manifest',
          remoteName: 'user',
          exposedModule: './profile'
        })
          .then(m => m.ProfileModule)
    }]
  },


  // Your route here:

  // Manual loading
  // {
  //   path: 'flights',
  //   loadChildren: () => import('mfe1/Module').then(m => m.HomeModule)
  // },

  // Dynamic loading
  // {
  //   path: 'flights',
  //   loadChildren: () =>
  //     loadRemoteModule({
  //       type: 'module',
  //       remoteEntry: 'http://localhost:4201/remoteEntry.js',
  //       exposedModule: './Module'
  //     })
  //       .then(m => m.HomeModule)
  // },
  // Use a Registry
  {
    path: 'flights',
    loadChildren: () =>
      loadRemoteModule({
        type: 'manifest',
        remoteName: 'mfe1',
        exposedModule: './Module'
      })
        .then(m => m.HomeModule)
  },
  {
    path: 'nav',
    loadChildren: () =>
      loadRemoteModule({
        type: 'manifest',
        remoteName: 'nav',
        exposedModule: './Module'
      })
        .then(m => m.AppModule)
  },

  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
