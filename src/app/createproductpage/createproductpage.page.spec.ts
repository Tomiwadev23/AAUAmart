import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateproductpagePage } from './createproductpage.page';

describe('CreateproductpagePage', () => {
  let component: CreateproductpagePage;
  let fixture: ComponentFixture<CreateproductpagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateproductpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
