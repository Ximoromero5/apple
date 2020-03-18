import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Iphone11proComponent } from './iphone11pro.component';

describe('Iphone11proComponent', () => {
  let component: Iphone11proComponent;
  let fixture: ComponentFixture<Iphone11proComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Iphone11proComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Iphone11proComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
