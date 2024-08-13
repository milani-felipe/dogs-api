import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogsListComponent } from './dogs-list.component';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { DogsService } from './dogs.service';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MoreDetailsComponent } from './more-details/more-details.component';
import { CardComponent } from './card/card.component';
import { of } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

describe('DogsListComponent', () => {
  let component: DogsListComponent;
  let fixture: ComponentFixture<DogsListComponent>;
  let dogsServiceMock = {
    getDogsList: (page: number) => of([]),
    getBreedPhoto: (id: number) => of([])
  }
  let service: DogsService;
  const dogsListResponse = [{
    "weight": { "imperial": "6 - 13", "metric": "3 - 6" },
    "height": { "imperial": "9 - 11.5", "metric": "23 - 29" },
    "id": 1,
    "name": "Affenpinscher",
    "bred_for": "Small rodent hunting, lapdog",
    "breed_group": "Toy",
    "life_span": "10 - 12 years",
    "temperament": "Stubborn, Curious, Playful, Adventurous, Active, Fun-loving",
    "origin": "Germany, France",
    "reference_image_id": "BJa4kxc4X"

  },
  {
    "weight": { "imperial": "6 - 13", "metric": "3 - 6" },
    "height": { "imperial": "9 - 11.5", "metric": "23 - 29" },
    "id": 1,
    "name": "Affenpinscher",
    "bred_for": "Small rodent hunting, lapdog",
    "breed_group": "Toy",
    "life_span": "10 - 12 years",
    "temperament": "Stubborn, Curious, Playful, Adventurous, Active, Fun-loving",
    "origin": "Germany, France",
    "reference_image_id": "BJa4kxc4X"

  }]
  // let dogsServiceMock = jasmine.createSpyObj('DogsService', ['getDogsList', `getBreedPhoto`])
  // let getDogsListSpy = dogsServiceMock.getDogsList().and.returnValue(of(dogsListResponse))

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DogsListComponent, MatDialogModule, MoreDetailsComponent, CardComponent, MoreDetailsComponent, MatButtonModule, MatDialogModule, MatIconModule],
      providers: [{ provide: DogsService, useValue: dogsServiceMock },
      provideHttpClientTesting(),
      { provide: MatDialogRef, useValue: {open: () => {}} }, { provide: MAT_DIALOG_DATA, useValue: { name: `some dog` } }]
    })
      .compileComponents();
    fixture = TestBed.createComponent(DogsListComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(DogsService)

    fixture.detectChanges();
  });

  it('should create', () => {
    
    spyOn(service, 'getDogsList').and.returnValue(of(dogsListResponse));
    expect(component).toBeTruthy();
  });

  it('should go to next page', () => {
    spyOn(service, 'getDogsList').and.returnValue(of(dogsListResponse));
    component.next();
    expect(service.getDogsList).toHaveBeenCalled();
    expect(component.currentPage).toBe(1);

  })


  it('should go to previous page', () => {
    spyOn(service, 'getDogsList').and.returnValue(of(dogsListResponse));
    component.currentPage = 3;

    component.previous();
    expect(service.getDogsList).toHaveBeenCalled();
    expect(component.currentPage).toBe(2);

  })

  it('should render 2 cards', () => {
    spyOn(service, 'getDogsList').and.returnValue(of(dogsListResponse));
    component.getDogsList();
    fixture.detectChanges();
    const cards = fixture.nativeElement.ownerDocument.querySelectorAll('app-card');
    expect(component.dogsList.length).toBe(2);
    expect(cards.length).toBe(2);
  })

  
  it('should render 0 card', () => {
    spyOn(service, 'getDogsList').and.returnValue(of([]));
    component.getDogsList();
    fixture.detectChanges();
    const cards = fixture.nativeElement.ownerDocument.querySelectorAll('app-card');
    expect(component.dogsList.length).toBe(0);
    expect(cards.length).toBe(0);
  })

});
