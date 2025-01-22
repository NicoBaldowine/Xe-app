import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProofAddressPage } from './proof-address.page';

describe('ProofAddressPage', () => {
  let component: ProofAddressPage;
  let fixture: ComponentFixture<ProofAddressPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProofAddressPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
