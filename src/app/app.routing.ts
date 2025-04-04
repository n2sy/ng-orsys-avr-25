import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { CvComponent } from './cv/cv.component';
import { ManageServersComponent } from './manage-servers/manage-servers.component';
import { HomeAccountComponent } from './accounts/home-account/home-account.component';
import { MsWordComponent } from './ms-word/ms-word.component';
import { InfosComponent } from './infos/infos.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { ReactFormComponent } from './react-form/react-form.component';
import { withTokenGuard } from './guards/with-token.guard';
import { isloggedGuard } from './guards/islogged.guard';
import { quitterLoginGuard } from './guards/quitter-login.guard';
import { quitterFormGuard } from './guards/quitter-form.guard';

//2eme version
// let myRoutes: Routes = [
//   { path: '', component: AccueilComponent },
//   {
//     path: 'cv',
//     component: CvComponent,
//     children: [
//       //  { path: '', component: CvComponent },
//       { path: 'add', component: AddComponent },
//       {
//         path: ':id',
//         children: [
//           { path: '', component: InfosComponent },
//           { path: 'edit', component: EditComponent },
//         ],
//       },
//     ],
//   },
//   {
//     path: 'servers',
//     loadChildren: () => import('./sub/sub.module').then((m) => m.SubModule),
//   }, // LAZY LOADING
//   { path: 'accounts', component: HomeAccountComponent },
//   { path: 'login', component: LoginComponent },
//   { path: 'ms-word', component: MsWordComponent },
//   { path: 'not-found', component: NotFoundComponent },
//   { path: '**', redirectTo: 'not-found' }, // Wild Route
// ];

//1ere version
let myRoutes: Routes = [
  { path: '', component: AccueilComponent },
  {
    path: 'cv',
    children: [
      { path: '', component: CvComponent },
      {
        path: 'add',
        component: AddComponent,
        canActivate: [withTokenGuard],
        canDeactivate: [quitterFormGuard],
      },
      {
        path: ':id',
        children: [
          { path: '', component: InfosComponent },
          {
            path: 'edit',
            component: EditComponent,
            canActivate: [withTokenGuard],
          },
        ],
      },
    ],
  },
  { path: 'servers', component: ManageServersComponent },
  { path: 'accounts', component: HomeAccountComponent },
  { path: 'react', component: ReactFormComponent },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [isloggedGuard],
    canDeactivate: [quitterLoginGuard],
  },
  { path: 'ms-word', component: MsWordComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' }, // Wild Route
];

export const INETEUM_ROUTING = RouterModule.forRoot(myRoutes);
