import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormcheckinComponent } from './formcheckin.component';

describe('FormcheckinComponent', () => {
  let component: FormcheckinComponent;
  let fixture: ComponentFixture<FormcheckinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormcheckinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormcheckinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
