import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoConnectivityComponent } from './no-connectivity.component';

describe('NoConnectivityComponent', () => {
  let component: NoConnectivityComponent;
  let fixture: ComponentFixture<NoConnectivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoConnectivityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoConnectivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
