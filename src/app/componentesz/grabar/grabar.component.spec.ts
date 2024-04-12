import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrabarComponent } from './grabar.component';

describe('GrabarComponent', () => {
  let component: GrabarComponent;
  let fixture: ComponentFixture<GrabarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GrabarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GrabarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
