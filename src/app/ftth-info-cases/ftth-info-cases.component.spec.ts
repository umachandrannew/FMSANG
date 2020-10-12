import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FtthCaseInfoComponent } from './ftth-case-info.component';

describe('FtthCaseInfoComponent', () => {
  let component: FtthCaseInfoComponent;
  let fixture: ComponentFixture<FtthCaseInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FtthCaseInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FtthCaseInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
