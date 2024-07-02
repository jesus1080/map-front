import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { MarkerFormComponent } from '../marker-form/marker-form.component';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [MarkerFormComponent],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent implements OnInit {

  private map!: L.Map;
  private currentMarker: L.Marker | undefined;

  constructor(){}

  ngOnInit(): void {
      this.initMap();
  }

  private initMap(): void {
    this.map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);

    this.map.on('click', this.onMapClick.bind(this));
  }

  private onMapClick(e: L.LeafletMouseEvent): void{
    const latlng = e.latlng;
    if (this.currentMarker) {
      this.map?.removeLayer(this.currentMarker);
    }
    this.currentMarker = L.marker([latlng.lat, latlng.lng]).addTo(this.map);
    (document.getElementById('markerFormModal') as any).style.display = 'block';
  }

  addMarker(markerData: { name: string, description: string }): void {
    if (this.currentMarker) {
      
      this.currentMarker.bindPopup(`<b>${markerData.name}</b><br>${markerData.description}`).openPopup();
      
      this.currentMarker = undefined;
    }
  }
}
