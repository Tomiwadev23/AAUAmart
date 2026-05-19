import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreatesellerPagePage } from './createseller-page.page';

describe('CreatesellerPagePage', () => {
  let component: CreatesellerPagePage;
  let fixture: ComponentFixture<CreatesellerPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatesellerPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
