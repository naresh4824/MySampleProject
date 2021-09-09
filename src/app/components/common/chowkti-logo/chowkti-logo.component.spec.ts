import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChowktiLogoComponent } from './chowkti-logo.component';

describe('ChowktiLogoComponent', () => {
  let component: ChowktiLogoComponent;
  let fixture: ComponentFixture<ChowktiLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChowktiLogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChowktiLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
