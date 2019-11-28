import { TestBed } from '@angular/core/testing';

import { RecipeService } from './recipe.service';
import { HttpClient } from '@angular/common/http';

describe('RecipeService', () => {
  let httpSpy: HttpClient;
  let service: RecipeService;

  beforeEach(() => {
    httpSpy = jasmine.createSpyObj('HttpClient', ['get', 'post', 'delete']);
    TestBed.configureTestingModule({
      providers: [
        RecipeService,
        {provide: HttpClient, useValue: httpSpy}
      ]
    });
    service = TestBed.get(RecipeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getAllRecipes', () => {
    service.getRecipes();
    expect(httpSpy.get).toHaveBeenCalledWith('http://localhost:8080/api/v1/recipes');
  });
});
