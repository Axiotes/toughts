import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToughtsComponent } from './toughts.component';

describe('ToughtsComponent', () => {
  let component: ToughtsComponent;
  let fixture: ComponentFixture<ToughtsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToughtsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToughtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
