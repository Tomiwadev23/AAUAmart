import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BuyersPagePage } from './buyers-page.page';

describe('BuyersPagePage', () => {
  let component: BuyersPagePage;
  let fixture: ComponentFixture<BuyersPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyersPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
