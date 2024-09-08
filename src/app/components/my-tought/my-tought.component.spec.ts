import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyToughtComponent } from './my-tought.component';

describe('MyToughtComponent', () => {
  let component: MyToughtComponent;
  let fixture: ComponentFixture<MyToughtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyToughtComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyToughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
