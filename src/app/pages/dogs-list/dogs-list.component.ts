import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { CardComponent } from './card/card.component';
import { DogsService } from './dogs.service';
import { CommonModule } from '@angular/common';
import { IDogSpecs } from '../../interfaces/dogs';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dogs-list',
  standalone: true,
  imports: [CardComponent,
    CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './dogs-list.component.html',
  styleUrl: './dogs-list.component.scss'
})
export class DogsListComponent {
  currentPage = 0;
  dogsList: IDogSpecs[] = [];
  isLoading = true;
  displayedColumns: string[] = ['position', 'name', 'weight'];
  constructor(private DogsService: DogsService) { }

  ngOnInit() {
    this.getDogsList()
  }

  getDogsList() {
    this.isLoading = true;
    this.DogsService.getDogsList(this.currentPage).subscribe({
      next: (response: any) => {
        this.dogsList = response
        this.isLoading = false
      },
      error: (_) => { this.isLoading = false; }
    })
  }

  next() {
    this.currentPage += 1;
    this.getDogsList();
  }
  previous() {
    this.currentPage -= 1;
    this.getDogsList();
  }
}
