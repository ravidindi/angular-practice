import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent {
  @ViewChild('nameRef', { static: true }) nameRef1: ElementRef;
  @ViewChild('amountRef', { static: true }) amountRef1: ElementRef;

  @Output() ingredientEmitted = new EventEmitter<Ingredient>();

  onAddIngredient(): void {
    event.preventDefault();
    const name = this.nameRef1.nativeElement.value;
    const amount = this.amountRef1.nativeElement.value;
    const ingredient = new Ingredient(name, amount);
    this.ingredientEmitted.emit(ingredient);
  }
}
