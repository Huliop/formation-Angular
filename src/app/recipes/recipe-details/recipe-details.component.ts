import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe/recipe.model';
import { ActivatedRoute } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss'],
  animations: [
    trigger('translate',
      [
        state('init', style({ height: '200px' })),
        state('transit', style({ height: '350px' })),
        transition('init=>transit', animate('1000ms')),
        transition('transit=>init', animate('1000ms'))
      ])
  ]
})
export class RecipeDetailsComponent implements OnInit {

  constructor(private recipeService: RecipeService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.recipe = {};
    this.id = this.route.snapshot.paramMap.get('id')
    this.recipeService.getRecipe(this.id).subscribe(recipe => {
      this.recipe = recipe;
    });
  }

  toggle() {
    this.button = !this.button;
  }

  button: boolean;

  recipe: Recipe;
  id: string;

}
