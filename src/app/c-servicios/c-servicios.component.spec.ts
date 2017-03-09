import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CServiciosComponent } from './c-servicios.component';

describe('CServiciosComponent', () => {
  let component: CServiciosComponent;
  let fixture: ComponentFixture<CServiciosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CServiciosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
