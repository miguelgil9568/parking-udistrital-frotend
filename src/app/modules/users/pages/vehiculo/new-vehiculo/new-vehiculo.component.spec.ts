import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NewVehiculoComponent } from './new-vehiculo.component';

describe('NewVehiculoComponent', () => {
  let component: NewVehiculoComponent;
  let fixture: ComponentFixture<NewVehiculoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NewVehiculoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
