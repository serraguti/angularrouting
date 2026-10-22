import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuTablaMultiplicarComponent } from './menu-tabla-multiplicar-component';

describe('MenuTablaMultiplicarComponent', () => {
  let component: MenuTablaMultiplicarComponent;
  let fixture: ComponentFixture<MenuTablaMultiplicarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuTablaMultiplicarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuTablaMultiplicarComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
