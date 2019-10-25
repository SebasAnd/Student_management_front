import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnhistoryComponent } from './alumnhistory.component';

describe('AlumnhistoryComponent', () => {
  let component: AlumnhistoryComponent;
  let fixture: ComponentFixture<AlumnhistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumnhistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
