import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PillContainerComponent } from './pill-container.component';

describe('PillContainerComponent', () => {
  let component: PillContainerComponent;
  let fixture: ComponentFixture<PillContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PillContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PillContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
