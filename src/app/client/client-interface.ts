export interface Client {
  id: number;
  nom: string;
  prenom: string;
  adresse: string;
  coordonnees: {
    latitude: number;
    longitude: number;
  };
  mois: string[];
  consommation_kwh: number[];
}

export interface ClientList {
  clients: Client[];
}
