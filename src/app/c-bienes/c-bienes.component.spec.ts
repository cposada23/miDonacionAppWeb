import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CBienesComponent } from './c-bienes.component';

describe('CBienesComponent', () => {
  let component: CBienesComponent;
  let fixture: ComponentFixture<CBienesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CBienesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CBienesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
