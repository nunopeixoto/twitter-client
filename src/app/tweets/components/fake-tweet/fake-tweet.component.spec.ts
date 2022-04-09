import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeTweetComponent } from './fake-tweet.component';

describe('FakeTweetComponent', () => {
  let component: FakeTweetComponent;
  let fixture: ComponentFixture<FakeTweetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FakeTweetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FakeTweetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
