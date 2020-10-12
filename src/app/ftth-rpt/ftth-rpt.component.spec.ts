import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FtthRptComponent } from './ftth-rpt.component';

describe('FtthRptComponent', () => {
  let component: FtthRptComponent;
  let fixture: ComponentFixture<FtthRptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FtthRptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FtthRptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
