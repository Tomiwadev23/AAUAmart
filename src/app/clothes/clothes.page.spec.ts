import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClothesPage } from './clothes.page';

describe('ClothesPage', () => {
  let component: ClothesPage;
  let fixture: ComponentFixture<ClothesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ClothesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
