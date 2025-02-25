import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GpuInfoService } from '../../Service/gpu-info.service.service';

@Component({
  selector: 'app-formulariodriver',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './formulariodriver.component.html',
  styleUrls: ['./formulariodriver.component.css'],
  providers: [GpuInfoService],
})
export class FormulariodriverComponent {
  modeloSeleccionado: string | null = null;
  sistemaOperativoSeleccionado: string | null = null;
  error: string | null = null;
  descargando: boolean = false; // Nueva variable para mostrar el mensaje de descarga en proceso

  constructor(@Inject(GpuInfoService) private gpuInfoService: GpuInfoService) {}

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
      this.descargando = true; // Mostrar mensaje de descarga en curso

      this.gpuInfoService.downloadDriver(fileId).subscribe(
        (blob) => {
          this.descargarBlob(blob, 'driver.exe');
          this.descargando = false; // Ocultar mensaje cuando termine la descarga
        },
        (error) => {
          console.error('Error al descargar el archivo:', error);
          this.error = 'Ocurrió un error al intentar descargar el driver.';
          this.descargando = false; // Ocultar mensaje en caso de error
        }
      );
    } else {
      this.error = 'No se encontró un driver para la selección especificada.';
    }
  }

  private obtenerFileId(modelo: string, sistema: string): string | null {
    const fileMap: { [key: string]: string } = {
      'rtx3090-windows': '1OpQ-btgMnMZQ33fCH-PrjB9R06MgfrGe',
      'rtx3090-linux': '1OpQ-btgMnMZQ33fCH-PrjB9R06MgfrGe',
      'rtx3090-macos': '1OpQ-btgMnMZQ33fCH-PrjB9R06MgfrGe',
      'rtx3080-windows': '1OpQ-btgMnMZQ33fCH-PrjB9R06MgfrGe',
      'rtx3080-linux': '1OpQ-btgMnMZQ33fCH-PrjB9R06MgfrGe',
      'rtx3080-macos': '1OpQ-btgMnMZQ33fCH-PrjB9R06MgfrGe',
      'rtx3070-windows': '1OpQ-btgMnMZQ33fCH-PrjB9R06MgfrGe',
      'rtx3070-linux': '1OpQ-btgMnMZQ33fCH-PrjB9R06MgfrGe',
      'rtx3070-macos': '1OpQ-btgMnMZQ33fCH-PrjB9R06MgfrGe',
      'rtx3060-windows': '1OpQ-btgMnMZQ33fCH-PrjB9R06MgfrGe',
      'rtx3060-linux': '1OpQ-btgMnMZQ33fCH-PrjB9R06MgfrGe',
      'rtx3060-macos': '1OpQ-btgMnMZQ33fCH-PrjB9R06MgfrGe',
      'gtx1660-windows': '1OpQ-btgMnMZQ33fCH-PrjB9R06MgfrGe',
      'gtx1660-linux': '1OpQ-btgMnMZQ33fCH-PrjB9R06MgfrGe',
      'gtx1660-macos': '1OpQ-btgMnMZQ33fCH-PrjB9R06MgfrGe',
      'gtx1650-windows': '1OpQ-btgMnMZQ33fCH-PrjB9R06MgfrGe',
      'gtx1650-linux': '1OpQ-btgMnMZQ33fCH-PrjB9R06MgfrGe',
      'gtx1650-macos': '1OpQ-btgMnMZQ33fCH-PrjB9R06MgfrGe',
      'gtx1050-windows': '1OpQ-btgMnMZQ33fCH-PrjB9R06MgfrGe',
      'gtx1050-linux': '1OpQ-btgMnMZQ33fCH-PrjB9R06MgfrGe',
      'gtx1050-macos': '1OpQ-btgMnMZQ33fCH-PrjB9R06MgfrGe',
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
