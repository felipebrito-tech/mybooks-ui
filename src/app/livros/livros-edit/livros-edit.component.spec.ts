import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivrosEditComponent } from './livros-edit.component';

describe('LivrosEditComponent', () => {
  let component: LivrosEditComponent;
  let fixture: ComponentFixture<LivrosEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivrosEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LivrosEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
