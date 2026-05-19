import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LivestocksPage } from './livestocks.page';

describe('LivestocksPage', () => {
  let component: LivestocksPage;
  let fixture: ComponentFixture<LivestocksPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LivestocksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
