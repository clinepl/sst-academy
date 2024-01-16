import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CultureNumeriqueComponent } from './culture-numerique.component';

describe('CultureNumeriqueComponent', () => {
  let component: CultureNumeriqueComponent;
  let fixture: ComponentFixture<CultureNumeriqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CultureNumeriqueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CultureNumeriqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
