import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaSubCatBienesComponent } from './nueva-sub-cat-bienes.component';

describe('NuevaSubCatBienesComponent', () => {
  let component: NuevaSubCatBienesComponent;
  let fixture: ComponentFixture<NuevaSubCatBienesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevaSubCatBienesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaSubCatBienesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
