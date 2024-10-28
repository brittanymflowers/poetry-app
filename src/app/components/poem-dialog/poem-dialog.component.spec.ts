import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PoemDialogComponent } from './poem-dialog.component';

describe('PoemDialogComponent', () => {
  let component: PoemDialogComponent;
  let fixture: ComponentFixture<PoemDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoemDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PoemDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
