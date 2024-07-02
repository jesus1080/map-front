import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MarkerService } from '../marker.service';
@Component({
  selector: 'app-marker-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './marker-form.component.html',
  styleUrl: './marker-form.component.css'
})
export class MarkerFormComponent {
  @Output() formSubmitted = new EventEmitter<{ name: string, description: string }>();
  markerData = { name: '', description: '' };

  constructor(private markerService: MarkerService) { }

  onSubmit(): void {

    this.markerService.addMarker(this.markerData).subscribe(response => {
      console.log('marker add correcto', response);
      this.formSubmitted.emit(this.markerData);
      this.markerData = { name: '', description: '' };
      (document.getElementById('markerFormModal') as any).style.display = 'none';
    }, error => {
      console.error('Error', error);
    });
    
    
  }
}
