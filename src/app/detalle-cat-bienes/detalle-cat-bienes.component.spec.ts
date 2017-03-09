import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleCatBienesComponent } from './detalle-cat-bienes.component';

describe('DetalleCatBienesComponent', () => {
  let component: DetalleCatBienesComponent;
  let fixture: ComponentFixture<DetalleCatBienesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleCatBienesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleCatBienesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
