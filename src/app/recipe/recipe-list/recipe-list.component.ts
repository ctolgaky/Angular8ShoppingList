import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[]  = [ 
    new Recipe('Steak', 
  'Using this recipe you can prepare a delicious steak in less than half an hour cook time', 
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-pkRjCNpkRHziE4OaeEq_QxEvltB5brIgM9jt_E6FjdfXAWRB'),
  new Recipe('Rib Eye', 'Using this recipe you can create a steak',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-pkRjCNpkRHziE4OaeEq_QxEvltB5brIgM9jt_E6FjdfXAWRB')
];
 


  constructor() { }

  @Output() theRecipe = new EventEmitter<Recipe>();

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    this.theRecipe.emit(recipe);
  }

}
