import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MelanieComponent } from './melanie.component';

describe('ShounenComponent', () => {
  let component: MelanieComponent;
  let fixture: ComponentFixture<MelanieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MelanieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MelanieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

