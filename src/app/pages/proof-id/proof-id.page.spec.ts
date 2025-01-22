import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProofIdPage } from './proof-id.page';

describe('ProofIdPage', () => {
  let component: ProofIdPage;
  let fixture: ComponentFixture<ProofIdPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProofIdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
