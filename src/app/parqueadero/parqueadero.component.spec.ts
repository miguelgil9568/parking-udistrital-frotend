import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParqueaderoComponent } from './parqueadero.component';

describe('ParqueaderoComponent', () => {
  let component: ParqueaderoComponent;
  let fixture: ComponentFixture<ParqueaderoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParqueaderoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParqueaderoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
