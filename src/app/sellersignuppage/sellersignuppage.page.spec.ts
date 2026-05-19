import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SellersignuppagePage } from './sellersignuppage.page';

describe('SellersignuppagePage', () => {
  let component: SellersignuppagePage;
  let fixture: ComponentFixture<SellersignuppagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SellersignuppagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
