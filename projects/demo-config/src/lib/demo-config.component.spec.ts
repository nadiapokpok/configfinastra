import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoConfigComponent } from './demo-config.component';

describe('DemoConfigComponent', () => {
  let component: DemoConfigComponent;
  let fixture: ComponentFixture<DemoConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
