import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe/recipe.model';
import { RecipeService } from '../recipe.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent implements OnInit {

  constructor(private recipeService: RecipeService, private fb: FormBuilder) { }

  ngOnInit() {
    this.recipe = {};
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength, Validators.maxLength]],
      description: [''],
      picture: ['']
    });
  }

  recipe: Recipe;
  form: FormGroup;

  onSubmit() {
    this.recipeService.addRecipe(this.form.getRawValue()).subscribe();
  }

}
