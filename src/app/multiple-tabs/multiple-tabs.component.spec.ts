import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleTabsComponent } from './multiple-tabs.component';

describe('MultipleTabsComponent', () => {
  let component: MultipleTabsComponent;
  let fixture: ComponentFixture<MultipleTabsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultipleTabsComponent]
    });
    fixture = TestBed.createComponent(MultipleTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
