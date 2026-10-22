import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NumeroDobleComponent } from './numero-doble-component';

describe('NumeroDobleComponent', () => {
  let component: NumeroDobleComponent;
  let fixture: ComponentFixture<NumeroDobleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NumeroDobleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NumeroDobleComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
