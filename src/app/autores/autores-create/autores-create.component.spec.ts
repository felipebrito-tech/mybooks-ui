import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoresCreateComponent } from './autores-create.component';

describe('AutoresCreateComponent', () => {
  let component: AutoresCreateComponent;
  let fixture: ComponentFixture<AutoresCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoresCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoresCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
