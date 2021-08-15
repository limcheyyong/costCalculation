import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareDetialComponent } from './share-detial.component';

describe('ShareDetialComponent', () => {
  let component: ShareDetialComponent;
  let fixture: ComponentFixture<ShareDetialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareDetialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareDetialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
