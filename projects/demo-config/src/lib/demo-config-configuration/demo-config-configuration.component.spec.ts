import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoConfigConfigurationComponent } from './demo-config-configuration.component';

describe('DemoConfigConfigurationComponent', () => {
  let component: DemoConfigConfigurationComponent;
  let fixture: ComponentFixture<DemoConfigConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoConfigConfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoConfigConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
