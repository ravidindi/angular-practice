import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from './shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  constructor(private shoppingService: ShoppingService) {}
  ngOnInit(): void {
    this.shoppingService.ingredientEmitter.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
    this.ingredients = this.shoppingService.getItems();
  }
  ingredients: Ingredient[];

  addIngredient(ingredient: Ingredient): void {
    this.ingredients.push(ingredient);
  }
}
