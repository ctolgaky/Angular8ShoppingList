import { Component, OnInit, ElementRef, ViewChild, EventEmitter ,Output} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

@ViewChild('inputName', {static:false}) nameInput: ElementRef;
@ViewChild('inputAmount', {static:false}) nameAmount: ElementRef;
@Output() ingredientAdded = new EventEmitter<Ingredient>();


  constructor() { }

  ngOnInit() {
  }

  onAddItem(){
    const name = this.nameInput.nativeElement.value;
    const amount = this.nameAmount.nativeElement.value;
    const newIngredient = new Ingredient(name,amount);
    this.ingredientAdded.emit(newIngredient)
  }
}
