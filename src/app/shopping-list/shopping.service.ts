import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingService {
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Oranges', 15),
  ];

  ingredientEmitter: EventEmitter<Ingredient[]> = new EventEmitter<
    Ingredient[]
  >();
  getItems(): Ingredient[] {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient): void {
    this.ingredients.push(ingredient);
    this.ingredientEmitter.emit(this.ingredients.slice());
  }
  addIngredients(ingredients: Ingredient[]): void {
    this.ingredients.push(...ingredients);
    this.ingredientEmitter.emit(this.ingredients.slice());
  }
}
