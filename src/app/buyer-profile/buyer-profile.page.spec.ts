import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BuyerProfilePage } from './buyer-profile.page';

describe('BuyerProfilePage', () => {
  let component: BuyerProfilePage;
  let fixture: ComponentFixture<BuyerProfilePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
