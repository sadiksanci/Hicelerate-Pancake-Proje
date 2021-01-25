import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuzenleComponent } from './duzenle.component';

describe('DuzenleComponent', () => {
  let component: DuzenleComponent;
  let fixture: ComponentFixture<DuzenleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DuzenleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DuzenleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
