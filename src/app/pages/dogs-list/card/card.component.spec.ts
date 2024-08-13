import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';
import { provideHttpClient } from '@angular/common/http';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  const dogsSpecInfo = {
    bred_for: 'string',
    breed_group: 'string',
    life_span: 'string',
    name: 'string',
    origin: 'string',
    reference_image_id: 'string',
    temperament: 'string',
    weight: {
      imperial: 'string',
      metric: 'string' },
    height: {
      imperial: 'string',
      metric: 'string' },
    id: 1
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardComponent],
      providers: [
        provideHttpClient()]
    })
      .compileComponents();


    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    component.dogSpecs = dogsSpecInfo;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
