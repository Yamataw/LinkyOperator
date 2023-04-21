import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { PanelComponent } from './panel/panel.component';
import { ChartComponent } from './chart/chart.component';
import {CoreModule} from "./core/core.module";
import {SharedModule} from "./shared/shared.module";
import { ConnectComponent } from './connect/connect.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    PanelComponent,
    ChartComponent,
    ConnectComponent,
    NotFoundComponent,
  ],
  imports: [
    CoreModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {

}
