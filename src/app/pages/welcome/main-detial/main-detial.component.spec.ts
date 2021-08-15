import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDetialComponent } from './main-detial.component';

describe('MainDetialComponent', () => {
  let component: MainDetialComponent;
  let fixture: ComponentFixture<MainDetialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainDetialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainDetialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
