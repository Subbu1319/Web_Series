import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerDetComponent } from './ser-det.component';

describe('SerDetComponent', () => {
  let component: SerDetComponent;
  let fixture: ComponentFixture<SerDetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerDetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SerDetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
