import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewusrComponent } from './newusr.component';

describe('NewusrComponent', () => {
  let component: NewusrComponent;
  let fixture: ComponentFixture<NewusrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewusrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewusrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
