import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { CvComponent } from './cv/cv.component';
import { ManageServersComponent } from './manage-servers/manage-servers.component';
import { HomeAccountComponent } from './accounts/home-account/home-account.component';
import { MsWordComponent } from './ms-word/ms-word.component';

let myRoutes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'cv', component: CvComponent },
  { path: 'servers', component: ManageServersComponent },
  { path: 'accounts', component: HomeAccountComponent },
  { path: 'ms-word', component: MsWordComponent },
];

export const INETEUM_ROUTING = RouterModule.forRoot(myRoutes);
