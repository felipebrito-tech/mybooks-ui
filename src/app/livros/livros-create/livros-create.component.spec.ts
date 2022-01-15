import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivrosCreateComponent } from './livros-create.component';

describe('LivrosCreateComponent', () => {
  let component: LivrosCreateComponent;
  let fixture: ComponentFixture<LivrosCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivrosCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LivrosCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
