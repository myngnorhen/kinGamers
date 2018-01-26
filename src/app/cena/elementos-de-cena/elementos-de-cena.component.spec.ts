import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementosDeCenaComponent } from './elementos-de-cena.component';

describe('ElementosDeCenaComponent', () => {
  let component: ElementosDeCenaComponent;
  let fixture: ComponentFixture<ElementosDeCenaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementosDeCenaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementosDeCenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
