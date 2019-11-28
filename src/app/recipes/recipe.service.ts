import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Recipe } from './recipe/recipe.model';

@Injectable()
export class RecipeService {

  private recipeUrl = 'http://localhost:8080/api/v1/recipes';

  constructor(private http: HttpClient) { }

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.recipeUrl);
  }

  getFirstRecipe(): Observable<Recipe> {
    return this.getRecipes().pipe(map(recipes => recipes[0]));
  }

  getRecipe(id: string): Observable<Recipe> {
    return this.http.get<Recipe>(`${this.recipeUrl}/${id}`);
  }

  addRecipe(recipe: Recipe): Observable<void> {
    return this.http.post<void>(this.recipeUrl, recipe);
  }

  deleteRecipe(id: string): Observable<{}> {
    return this.http.delete(`${this.recipeUrl}/${id}`);
  }
}
