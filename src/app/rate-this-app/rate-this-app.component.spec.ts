import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RateThisAppComponent } from './rate-this-app.component';

describe('RateThisAppComponent', () => {
  let component: RateThisAppComponent;
  let fixture: ComponentFixture<RateThisAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RateThisAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RateThisAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
