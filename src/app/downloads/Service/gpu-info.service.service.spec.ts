import { TestBed } from '@angular/core/testing';
import { GpuInfoService } from './gpu-info.service.service';

/**
 * @file gpu-info.service.service.spec.ts
 * @description Archivo de pruebas unitarias para el servicio GpuInfoServiceService.
 * Se utiliza para comprobar la correcta creación e inyección del servicio en Angular.
 */

describe('GpuInfoServiceService', () => {
  let service: GpuInfoService;

  /**
   * @beforeEach
   * @description Configura el entorno de pruebas antes de cada test.
   * Se encarga de inicializar el servicio y preparar el TestBed.
   */
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GpuInfoService);
  });

  /**
   * @test Verifica que el servicio GpuInfoServiceService se crea correctamente.
   */
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
