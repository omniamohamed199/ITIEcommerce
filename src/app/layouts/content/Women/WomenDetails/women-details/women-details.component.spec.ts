import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenDetailsComponent } from './women-details.component';

describe('WomenDetailsComponent', () => {
  let component: WomenDetailsComponent;
  let fixture: ComponentFixture<WomenDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WomenDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WomenDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
