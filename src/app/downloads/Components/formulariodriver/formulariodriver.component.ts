import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Solo FormsModule es necesario
import { HttpClientModule } from '@angular/common/http';
import { GpuInfoService } from '../../Service/gpu-info.service.service';

/**
 * Componente para manejar el formulario de descarga de drivers.
 * Permite seleccionar el modelo de tarjeta gráfica y sistema operativo, 
 * y descargar el driver correspondiente.
 */
@Component({
  selector: 'app-formulariodriver', // Selector del componente
  standalone: true, // Componente independiente
  imports: [CommonModule, FormsModule, HttpClientModule], // Módulos necesarios para este componente
  templateUrl: './formulariodriver.component.html', // Archivo de plantilla HTML
  styleUrls: ['./formulariodriver.component.css'], // Archivo de estilos CSS
  providers: [GpuInfoService], // Proveedor del servicio para obtener los drivers
})
export class FormulariodriverComponent {
  modeloSeleccionado: string | null = null; // Modelo de tarjeta gráfica seleccionado
  sistemaOperativoSeleccionado: string | null = null; // Sistema operativo seleccionado
  error: string | null = null; // Mensaje de error, si ocurre alguno

  /**
   * Constructor del componente, inyecta el servicio para obtener los drivers.
   * @param {GpuInfoService} gpuInfoService - Servicio para manejar la descarga de drivers
   */
  constructor(@Inject(GpuInfoService) private gpuInfoService: GpuInfoService) {}

  /**
   * Método para descargar el driver seleccionado.
   * Verifica que se haya seleccionado un modelo y sistema operativo antes de intentar la descarga.
   */
  descargarDriver(): void {
    // Verifica si se han seleccionado tanto el modelo como el sistema operativo
    if (!this.modeloSeleccionado || !this.sistemaOperativoSeleccionado) {
      this.error = 'Debes seleccionar un modelo y un sistema operativo.';
      return; // Detiene la ejecución si falta alguna selección
    }

    // Obtiene el ID del archivo correspondiente al modelo y sistema operativo seleccionados
    const fileId = this.obtenerFileId(
      this.modeloSeleccionado,
      this.sistemaOperativoSeleccionado
    );

    // Si se encuentra un archivo, realiza la descarga
    if (fileId) {
      this.error = null; // Limpia cualquier error previo
      // Llama al servicio para descargar el archivo correspondiente
      this.gpuInfoService.downloadDriver(fileId).subscribe(
        (blob) => this.descargarBlob(blob, 'driver.txt'), // Si la descarga es exitosa, guarda el archivo
        (error) => {
          console.error('Error al descargar el archivo:', error); // Muestra el error en consola
          this.error = 'Ocurrió un error al intentar descargar el driver.'; // Establece el mensaje de error
        }
      );
    } else {
      // Si no se encuentra un archivo para la selección, muestra un error
      this.error = 'No se encontró un driver para la selección especificada.';
    }
  }

  /**
   * Obtiene el ID del archivo según el modelo de tarjeta gráfica y sistema operativo seleccionados.
   * @param {string} modelo - Modelo de tarjeta gráfica seleccionado
   * @param {string} sistema - Sistema operativo seleccionado
   * @returns {string | null} - ID del archivo en Google Drive o null si no se encuentra
   */
  private obtenerFileId(modelo: string, sistema: string): string | null {
    // Mapa que asocia combinaciones de modelo y sistema operativo con los ID de los archivos en Google Drive
    const fileMap: { [key: string]: string } = {
      'rtx3090-windows': '1EyXSmEpICqh_p3PrpBnPplVO1J0A8IF2',
      'rtx3090-linux': '1EyXSmEpICqh_p3PrpBnPplVO1J0A8IF2',
      'rtx3090-macos': '1EyXSmEpICqh_p3PrpBnPplVO1J0A8IF2',  // Mac añadido
      'rtx3080-windows': '1EyXSmEpICqh_p3PrpBnPplVO1J0A8IF2',
      'rtx3080-linux': '1EyXSmEpICqh_p3PrpBnPplVO1J0A8IF2',
      'rtx3080-macos': '1EyXSmEpICqh_p3PrpBnPplVO1J0A8IF2',  // Mac añadido
      'rtx3070-windows': '1EyXSmEpICqh_p3PrpBnPplVO1J0A8IF2',
      'rtx3070-linux': '1EyXSmEpICqh_p3PrpBnPplVO1J0A8IF2',
      'rtx3070-macos': '1EyXSmEpICqh_p3PrpBnPplVO1J0A8IF2',  // Mac añadido
      'rtx3060-windows': '1EyXSmEpICqh_p3PrpBnPplVO1J0A8IF2',
      'rtx3060-linux': '1EyXSmEpICqh_p3PrpBnPplVO1J0A8IF2',
      'rtx3060-macos': '1EyXSmEpICqh_p3PrpBnPplVO1J0A8IF2',  // Mac añadido
      'gtx1660-windows': '1EyXSmEpICqh_p3PrpBnPplVO1J0A8IF2',
      'gtx1660-linux': '1EyXSmEpICqh_p3PrpBnPplVO1J0A8IF2',
      'gtx1660-macos': '1EyXSmEpICqh_p3PrpBnPplVO1J0A8IF2',  // Mac añadido
      'gtx1650-windows': '1EyXSmEpICqh_p3PrpBnPplVO1J0A8IF2',
      'gtx1650-linux': '1EyXSmEpICqh_p3PrpBnPplVO1J0A8IF2',
      'gtx1650-macos': '1EyXSmEpICqh_p3PrpBnPplVO1J0A8IF2',  // Mac añadido
      'gtx1050-windows': '1EyXSmEpICqh_p3PrpBnPplVO1J0A8IF2',
      'gtx1050-linux': '1EyXSmEpICqh_p3PrpBnPplVO1J0A8IF2',
      'gtx1050-macos': '1EyXSmEpICqh_p3PrpBnPplVO1J0A8IF2',  // Mac añadido
    };

    // Devuelve el ID del archivo basado en el modelo y sistema operativo seleccionados
    return fileMap[`${modelo.toLowerCase()}-${sistema.toLowerCase()}`] || null;
  }

  /**
   * Descarga el archivo Blob recibido y lo guarda en el navegador.
   * @param {Blob} blob - El archivo descargado en formato Blob
   * @param {string} fileName - El nombre que se le asignará al archivo descargado
   */
  private descargarBlob(blob: Blob, fileName: string): void {
    // Crea una URL para el Blob recibido
    const url = window.URL.createObjectURL(blob);
    // Crea un enlace de descarga en el navegador
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName; // Asigna el nombre al archivo descargado
    a.click(); // Simula un clic en el enlace para iniciar la descarga
    window.URL.revokeObjectURL(url); // Revoca la URL del objeto una vez descargado
  }
}
