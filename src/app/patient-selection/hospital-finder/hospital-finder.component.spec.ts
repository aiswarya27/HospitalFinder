import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalFinderComponent } from './hospital-finder.component';

describe('HospitalFinderComponent', () => {
  let component: HospitalFinderComponent;
  let fixture: ComponentFixture<HospitalFinderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalFinderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
