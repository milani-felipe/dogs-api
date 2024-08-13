import { Routes } from '@angular/router';
import { DogsListComponent } from './pages/dogs-list/dogs-list.component';

export const routes: Routes = [
    { path: '', redirectTo: 'breeds', pathMatch: 'full' },
    { path: 'breeds', component: DogsListComponent }
];
