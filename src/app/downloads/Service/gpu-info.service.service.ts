import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

/**
 * @description Servicio para obtener información y archivos relacionados con GPUs desde Google Drive.
 */
@Injectable({
  providedIn: 'root'
})
export class GpuInfoService {
  /**
   * @private
   * @description Clave de API utilizada para acceder a Google Drive.
   */
  private apiKey = 'AIzaSyAnYyEFU3BP9Y-hJS9KFmL3whWZmGFxTtA'; 

  /**
   * @constructor
   * @param http Cliente HTTP para realizar solicitudes a la API de Google Drive.
   */
  constructor(private http: HttpClient) {}

  /**
   * @method downloadDriver
   * @description Obtiene un archivo desde Google Drive mediante su ID.
   * @param {string} fileId - ID del archivo en Google Drive.
   * @returns {Observable<Blob>} Observable que emite el archivo en formato blob.
   * 
   * @example
   * ```typescript
   * gpuInfoService.downloadDriver('archivoId123').subscribe(blob => {
   *   const url = window.URL.createObjectURL(blob);
   *   window.open(url);
   * });
   * ```
   */
  downloadDriver(fileId: string): Observable<Blob> {
    const url = `https://www.googleapis.com/drive/v3/files/${fileId}?alt=media&key=${this.apiKey}`;
    return this.http.get(url, { responseType: 'blob' });
  }
}
