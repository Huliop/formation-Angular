import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  constructor() { }

  @Input()
  recipeElement: Recipe;
  isToggled: Boolean;
  
  ngOnInit() {
    this.isToggled = false;
  }

  toggle(): void {
    this.isToggled = !this.isToggled;
  }

}
