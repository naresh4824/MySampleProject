import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelephoneComponentComponent } from './telephone-component.component';

describe('TelephoneComponentComponent', () => {
  let component: TelephoneComponentComponent;
  let fixture: ComponentFixture<TelephoneComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelephoneComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelephoneComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
