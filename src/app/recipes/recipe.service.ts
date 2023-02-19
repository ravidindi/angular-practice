import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from '../shopping-list/shopping.service';
import { Recipe } from './recipe.model';
@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Chicken Biryani',
      'The best of the world',
      'https://cdn.pixabay.com/photo/2021/01/22/19/48/grilled-5940974_960_720.jpg',
      [new Ingredient('Chicken', 1), new Ingredient('Onion', 8)]
    ),
    new Recipe(
      'Chicken Biryani2',
      'The best of the world',
      'https://cdn.pixabay.com/photo/2021/01/22/19/48/grilled-5940974_960_720.jpg',
      [new Ingredient('Chicken', 1), new Ingredient('Onion', 8)]
    ),
  ];
  constructor(private shoppingService: ShoppingService) {}

  recipeEmitted: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  addToShoppingList(ingredients: Ingredient[]): void {
    this.shoppingService.addIngredients(ingredients);
  }
}
