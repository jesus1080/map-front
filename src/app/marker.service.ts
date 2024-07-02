import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MarkerService {

  private url = 'http://localhost:8080/api/bookmarks';
  constructor(private http: HttpClient) { }

  addMarker(markerData: { name: string, description: string }): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(this.url, markerData, { headers });
  }
}
