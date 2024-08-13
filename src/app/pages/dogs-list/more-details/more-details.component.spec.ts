import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreDetailsComponent } from './more-details.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

describe('MoreDetailsComponent', () => {
  let component: MoreDetailsComponent;
  let fixture: ComponentFixture<MoreDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoreDetailsComponent],
      providers: [{ provide: MatDialogRef, useValue: {} }, { provide: MAT_DIALOG_DATA, useValue: {name: `some dog`} }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoreDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
