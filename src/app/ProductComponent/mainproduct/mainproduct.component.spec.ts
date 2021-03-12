import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainproductComponent } from './mainproduct.component';

describe('MainproductComponent', () => {
  let component: MainproductComponent;
  let fixture: ComponentFixture<MainproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
