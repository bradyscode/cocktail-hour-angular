import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlcoholWarningComponent } from './alcohol-warning.component';

describe('AlcoholWarningComponent', () => {
  let component: AlcoholWarningComponent;
  let fixture: ComponentFixture<AlcoholWarningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlcoholWarningComponent]
    });
    fixture = TestBed.createComponent(AlcoholWarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
