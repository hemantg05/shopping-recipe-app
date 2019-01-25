import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from '../recipes/recipe.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.getIngredients());
  }

  addRecipeIngredients(recipe: Recipe) {
    this.ingredients = this.ingredients.concat(recipe.ingredients);
    this.ingredientsChanged.next(this.getIngredients());
  }
}
