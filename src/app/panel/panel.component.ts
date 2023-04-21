import {AfterContentInit, AfterViewInit, Component, DoCheck, OnInit, ViewChild} from '@angular/core';
import {ClientService} from "../client/client.service";
import {ClientList} from "../client/client-interface";
import {data} from "autoprefixer";
import * as L from 'leaflet';
import {MapComponent} from "../map/map.component";

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  items: Array<{
    adresse: string;
    client: number; prenom: string; data: any,nom: string;latitude: number; longitude: number ;}> = [];
  clientList!: ClientList;
  gps: Array<{name: string;adresse :string; latitude: number; longitude: number ;}> = [];
  @ViewChild(MapComponent) child!:MapComponent;


  ngOnInit(): void {
    this.clientService.getClients()
      .subscribe(data => {
        this.clientList = data;
        this.createLists()
      });

  }

  createLists(): void {
    this.clientList.clients.forEach((client, i) => {
      this.gps[i] = {
        adresse : client.adresse,
        name : client.prenom + " "+ client.nom,
        latitude : client.coordonnees.latitude,
        longitude : client.coordonnees.longitude
      }
      this.items[i] = {
        adresse : client.adresse,
        client: client.id,
        prenom: client.prenom,
        nom: client.nom.split('<')[0],
        latitude : client.coordonnees.latitude,
        longitude : client.coordonnees.longitude,
        data: [
          {
            type: 'line',
            data: {
              labels: client.mois,
              datasets: [{
                label: 'Consommation',
                data: client.consommation_kwh
              }]
            },
            options: {
              scales: {
                y: {
                  beginAtZero: true
                }
              }
            }
          }
        ]

      }

    })
  }


  constructor(private clientService: ClientService) {
  }

  protected readonly alert = alert;
  protected readonly L = L;
}
