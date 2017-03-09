import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaCatBienesComponent } from './nueva-cat-bienes.component';

describe('NuevaCatBienesComponent', () => {
  let component: NuevaCatBienesComponent;
  let fixture: ComponentFixture<NuevaCatBienesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevaCatBienesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaCatBienesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
