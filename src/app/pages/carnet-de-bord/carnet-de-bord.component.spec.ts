import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarnetDeBordComponent } from './carnet-de-bord.component';

describe('CarnetDeBordComponent', () => {
  let component: CarnetDeBordComponent;
  let fixture: ComponentFixture<CarnetDeBordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarnetDeBordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarnetDeBordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
