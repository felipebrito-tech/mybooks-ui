import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssuntosCreateComponent } from './assuntos-create.component';

describe('AssuntosCreateComponent', () => {
  let component: AssuntosCreateComponent;
  let fixture: ComponentFixture<AssuntosCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssuntosCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssuntosCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
