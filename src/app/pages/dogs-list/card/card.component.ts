import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { IDogSpecs } from '../../../interfaces/dogs';
import { DogsService } from '../dogs.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MoreDetailsComponent } from '../more-details/more-details.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatDialogModule],

  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  photoUrl: ''
  @Input() dogSpecs: IDogSpecs

  constructor(
    private dogService: DogsService,
    private dialog: MatDialog) {
  }

  ngOnInit() {
    this.dogService.getBreedPhoto(this.dogSpecs.id).subscribe({
      next: (resp: any) => {
        this.photoUrl = resp.url
      }
    })
  }

  openMoreDetails() {
    this.dialog.open(MoreDetailsComponent, {
      width: '600px',
      data: this.dogSpecs
    })
  }
}
