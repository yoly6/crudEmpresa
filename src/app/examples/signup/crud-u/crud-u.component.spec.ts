import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudUComponent } from './crud-u.component';

describe('CrudUComponent', () => {
  let component: CrudUComponent;
  let fixture: ComponentFixture<CrudUComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudUComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
