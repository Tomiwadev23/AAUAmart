import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerifyemailPage } from './verifyemail.page';

describe('VerifyemailPage', () => {
  let component: VerifyemailPage;
  let fixture: ComponentFixture<VerifyemailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyemailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
