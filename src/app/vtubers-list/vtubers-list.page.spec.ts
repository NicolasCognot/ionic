import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VtubersListPage } from './vtubers-list.page';

describe('VtubersListPage', () => {
  let component: VtubersListPage;
  let fixture: ComponentFixture<VtubersListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VtubersListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
