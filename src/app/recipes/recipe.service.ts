import { Output, EventEmitter } from "@angular/core";

import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";

export class RecipeService {

  @Output() recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Pasta',
     'Description to make pasta',
     'https://c1.staticflickr.com/6/5653/30506843925_bede372296_b.jpg',
     [ 
       new Ingredient('Spices', 10),
       new Ingredient('Pasta Tubes', 100)
     ]
    ),
    new Recipe('Salad', 
      'Description to make Salad',
      'https://c2.staticflickr.com/8/7079/27669743600_b840c9ed86_b.jpg',
      [
        new Ingredient('Beans', 100),
        new Ingredient('Iceberg Salad', 50)
      ]
    )
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) : Recipe {
    return this.recipes[id];
  }

}