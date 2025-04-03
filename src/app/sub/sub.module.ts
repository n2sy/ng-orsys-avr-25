import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeServersComponent } from './home-servers/home-servers.component';
import { InfoServerComponent } from './info-server/info-server.component';
import { EditServerComponent } from './edit-server/edit-server.component';



@NgModule({
  declarations: [
    HomeServersComponent,
    InfoServerComponent,
    EditServerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SubModule { }
