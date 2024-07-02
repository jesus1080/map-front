import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MapComponent } from './map/map.component';
import { FormsModule } from '@angular/forms';
import { MarkerFormComponent } from './marker-form/marker-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MapComponent, FormsModule, MarkerFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-map';
}
