import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FileNumberPage } from './file-number.page';

describe('FileNumberPage', () => {
  let component: FileNumberPage;
  let fixture: ComponentFixture<FileNumberPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FileNumberPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
