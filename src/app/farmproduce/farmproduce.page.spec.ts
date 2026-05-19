import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FarmproducePage } from './farmproduce.page';

describe('FarmproducePage', () => {
  let component: FarmproducePage;
  let fixture: ComponentFixture<FarmproducePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmproducePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
