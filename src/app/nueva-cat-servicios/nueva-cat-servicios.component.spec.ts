import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaCatServiciosComponent } from './nueva-cat-servicios.component';

describe('NuevaCatServiciosComponent', () => {
  let component: NuevaCatServiciosComponent;
  let fixture: ComponentFixture<NuevaCatServiciosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevaCatServiciosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaCatServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
