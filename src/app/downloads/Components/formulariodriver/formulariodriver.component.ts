import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Solo FormsModule es necesario
import { HttpClientModule } from '@angular/common/http';
import { GpuInfoService } from '../../Service/gpu-info.service.service';

@Component({
  selector: 'app-formulariodriver',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule], // Usa FormsModule
  templateUrl: './formulariodriver.component.html',
  styleUrls: ['./formulariodriver.component.css'],
  providers: [GpuInfoService],
})
export class FormulariodriverComponent {
  modeloSeleccionado: string | null = null;
  sistemaOperativoSeleccionado: string | null = null;
  error: string | null = null;

  constructor(private gpuInfoService: GpuInfoService) {}

  descargarDriver(): void {
    if (!this.modeloSeleccionado || !this.sistemaOperativoSeleccionado) {
      this.error = 'Debes seleccionar un modelo y un sistema operativo.';
      return;
    }

    const fileId = this.obtenerFileId(
      this.modeloSeleccionado,
      this.sistemaOperativoSeleccionado
    );

    if (fileId) {
      this.error = null;
      this.gpuInfoService.downloadDriver(fileId).subscribe(
        (blob) => this.descargarBlob(blob, 'driver.txt'),
        (error) => {
          console.error('Error al descargar el archivo:', error);
          this.error = 'Ocurrió un error al intentar descargar el driver.';
        }
      );
    } else {
      this.error = 'No se encontró un driver para la selección especificada.';
    }
  }

  private obtenerFileId(modelo: string, sistema: string): string | null {
    const fileMap: { [key: string]: string } = {
      'nvidia-windows': '1EyXSmEpICqh_p3PrpBnPplVO1J0A8IF2', // Cambia por IDs válidos
      'nvidia-linux': '7G8H9I0J1K2L',
      'amd-windows': '3M4N5O6P7Q8R',
      'amd-linux': '9R8Q7P6O5N4M',
      'intel-windows': '8A7B6C5D4E3F',
    };

    return fileMap[`${modelo.toLowerCase()}-${sistema.toLowerCase()}`] || null;
  }

  private descargarBlob(blob: Blob, fileName: string): void {
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    a.click();
    window.URL.revokeObjectURL(url);
  }
}
