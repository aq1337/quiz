import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GruppenauswahlComponent } from './gruppenauswahl.component';

describe('GruppenauswahlComponent', () => {
  let component: GruppenauswahlComponent;
  let fixture: ComponentFixture<GruppenauswahlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GruppenauswahlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GruppenauswahlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
