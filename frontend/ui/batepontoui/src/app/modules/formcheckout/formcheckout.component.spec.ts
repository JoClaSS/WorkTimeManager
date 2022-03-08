import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormcheckoutComponent } from './formcheckout.component';

describe('FormcheckoutComponent', () => {
  let component: FormcheckoutComponent;
  let fixture: ComponentFixture<FormcheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormcheckoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormcheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
