import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe: Recipe;
  showSuccessAlert: boolean;

  constructor(private recipeService: RecipeService,
    private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe(
      (recipe: Recipe) => {
        this.recipe = recipe;
      }
    );
  }

  onClickToShoppingList() {
    this.shoppingListService.addRecipeIngredients(this.recipe);
    this.showSuccessAlert = true;
    setTimeout(()=>{
      this.showSuccessAlert = false;
    }, 2000);
  }
}
