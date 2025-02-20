import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormsModule } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class GpuInfoService {
  private apiKey = 'AIzaSyAnYyEFU3BP9Y-hJS9KFmL3whWZmGFxTtA' ; // Reemplaza con tu clave de API de Google Drive

  constructor(private http: HttpClient) {}

  /**
   * Obtiene un archivo desde Google Drive mediante su ID.
   * @param fileId ID del archivo en Google Drive
   * @returns Observable con el archivo en formato blob
   */
  downloadDriver(fileId: string): Observable<Blob> {
    const url = `https://www.googleapis.com/drive/v3/files/${fileId}?alt=media&key=${this.apiKey}`;
    return this.http.get(url, { responseType: 'blob' });
  }
}
