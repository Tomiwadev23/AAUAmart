import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SellerPagePage } from './seller-page.page';

describe('SellerPagePage', () => {
  let component: SellerPagePage;
  let fixture: ComponentFixture<SellerPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
