import { Component, inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { IDogSpecs } from '../../../interfaces/dogs';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-more-details',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,],
  templateUrl: './more-details.component.html',
  styleUrl: './more-details.component.scss'
})
export class MoreDetailsComponent {
  readonly dialogRef = inject(MatDialogRef<MoreDetailsComponent>);
  readonly data = inject<IDogSpecs>(MAT_DIALOG_DATA);


  onNoClick(): void {
    this.dialogRef.close();
  }
}
