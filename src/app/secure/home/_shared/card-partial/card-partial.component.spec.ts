import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPartialComponent } from './card-partial.component';

describe('CardPartialComponent', () => {
  let component: CardPartialComponent;
  let fixture: ComponentFixture<CardPartialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardPartialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardPartialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
