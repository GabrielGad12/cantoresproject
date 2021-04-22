import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LanaComponent } from './lana.component';

describe('LanaComponent', () => {
  let component: LanaComponent;
  let fixture: ComponentFixture<LanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
