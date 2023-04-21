import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavBarModule} from "./nav-bar/nav-bar.module";
import {NavBarComponent} from "./nav-bar/nav-bar.component";
import {RouterLink, RouterOutlet} from "@angular/router";



@NgModule({
  declarations: [
    NavBarComponent,
  ],
  exports: [
    NavBarComponent
  ],
  imports: [
    CommonModule,
    NavBarModule,
    RouterOutlet,
    RouterLink
  ]
})
export class CoreModule { }
