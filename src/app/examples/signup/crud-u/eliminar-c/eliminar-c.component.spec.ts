import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarCComponent } from './eliminar-c.component';

describe('EliminarCComponent', () => {
  let component: EliminarCComponent;
  let fixture: ComponentFixture<EliminarCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliminarCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
