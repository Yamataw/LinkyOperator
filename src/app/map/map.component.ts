import {AfterViewInit, Component, ElementRef, Input, Output, ViewChild} from '@angular/core';
import * as L from 'leaflet';
import _default from "chart.js/dist/plugins/plugin.tooltip";
import type = _default.defaults.animations.numbers.type;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
  @Output() map!: L.Map;
  @Input() gps : Array<{name: string;adresse : string; latitude: number; longitude: number }>;
  public marker_array!:Array<any>
  private initMap(): void {
    this.map = L.map('map', {
      center: [ 48.117266  ,  -1.6777926 ],
      zoom: 12
    });


    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
    });
    this.marker_array = [];
    this.gps.forEach((element,index) =>{
      var marker = L.marker([element.latitude, element.longitude],).addTo(this.map!);
      marker.bindPopup(`<b>${element.name}</b><br>
                                   ${element.adresse}`,).openPopup();
      this.marker_array[index] = marker;
    })

    tiles.addTo(this.map);


  }

  doSomething(lat: number ,long: number,index:number) {
    this.map.flyTo([lat, long], 18)
    this.marker_array[index].fireEvent('click');
  }


  constructor() {
    this.gps = [];

  }


  ngAfterViewInit(): void {
    this.initMap();
  }
}
