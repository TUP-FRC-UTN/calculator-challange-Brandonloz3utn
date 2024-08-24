import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalActionsComponent } from './cal-actions.component';

describe('CalActionsComponent', () => {
  let component: CalActionsComponent;
  let fixture: ComponentFixture<CalActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalActionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
