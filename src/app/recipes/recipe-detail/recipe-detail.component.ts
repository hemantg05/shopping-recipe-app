import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number = 0;
  showSuccessAlert: boolean;

  constructor(private recipeService: RecipeService,
    private shoppingListService: ShoppingListService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.recipe = this.recipeService.getRecipe(+params['id'])
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
