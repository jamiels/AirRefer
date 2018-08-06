import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDealsComponent } from './my-deals.component';

describe('MyDealsComponent', () => {
  let component: MyDealsComponent;
  let fixture: ComponentFixture<MyDealsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDealsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
