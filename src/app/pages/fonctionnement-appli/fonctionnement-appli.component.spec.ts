import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FonctionnementAppliComponent } from './fonctionnement-appli.component';

describe('FonctionnementAppliComponent', () => {
  let component: FonctionnementAppliComponent;
  let fixture: ComponentFixture<FonctionnementAppliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FonctionnementAppliComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FonctionnementAppliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
