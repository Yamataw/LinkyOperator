import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ConnectComponent} from "./connect/connect.component";
import {PanelComponent} from "./panel/panel.component";
import {NotFoundComponent} from "./not-found/not-found.component";

const routes: Routes = [
  { path: '', component:  PanelComponent},
  { path: 'login', component: ConnectComponent },
  { path: '**' , component : NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
