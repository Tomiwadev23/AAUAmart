import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BuyerAddressPage } from './buyer-address.page';

describe('BuyerAddressPage', () => {
  let component: BuyerAddressPage;
  let fixture: ComponentFixture<BuyerAddressPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerAddressPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
