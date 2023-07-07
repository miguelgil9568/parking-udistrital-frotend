import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ConsultarVehiculoComponent } from './consultar-vehiculo.component';

describe('ConsultarVehiculoComponent', () => {
  let component: ConsultarVehiculoComponent;
  let fixture: ComponentFixture<ConsultarVehiculoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultarVehiculoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
