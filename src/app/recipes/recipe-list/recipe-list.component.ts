import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  @Output() recipeEmitted = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'Chicken Biryani',
      'The best of the world',
      'https://cdn.pixabay.com/photo/2021/01/22/19/48/grilled-5940974_960_720.jpg'
    ),
    new Recipe(
      'Chicken Biryani2',
      'The best of the world',
      'https://cdn.pixabay.com/photo/2021/01/22/19/48/grilled-5940974_960_720.jpg'
    ),
  ];

  onRecipeSelected(recipe: Recipe): void {
    this.recipeEmitted.emit(recipe);
  }
}
