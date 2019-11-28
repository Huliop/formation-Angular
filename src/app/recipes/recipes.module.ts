import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipesComponent } from './recipes/recipes.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { RecipeService } from './recipe.service';
import { RecipesRoutingModule } from './recipes-routing.module';
import { CustomMaterialModule } from '../custom-material/custom-material.module';
import { RecipeComponent } from './recipe/recipe.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RecipeDetailsComponent,
    RecipesComponent,
    AddRecipeComponent,
    RecipeComponent
  ],
  imports: [
    CommonModule,
    RecipesRoutingModule,
    CustomMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    RecipeService
  ]
})
export class RecipesModule { }
