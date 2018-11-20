import { EventEmitter } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from '../recipes/recipe.model';

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.getIngredients());
  }

  addRecipeIngredients(recipe: Recipe) {
    this.ingredients = this.ingredients.concat(recipe.ingredients);
    this.ingredientsChanged.emit(this.getIngredients());
  }
}
