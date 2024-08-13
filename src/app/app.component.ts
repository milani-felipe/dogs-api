import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DogsListComponent } from './pages/dogs-list/dogs-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DogsListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dogs-api';
}
