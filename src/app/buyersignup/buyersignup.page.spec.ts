import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BuyersignupPage } from './buyersignup.page';

describe('BuyersignupPage', () => {
  let component: BuyersignupPage;
  let fixture: ComponentFixture<BuyersignupPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyersignupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
