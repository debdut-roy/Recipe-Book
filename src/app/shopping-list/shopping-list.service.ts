import { EventEmitter, Injectable } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  constructor() { }

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient){
    let ingredientIndex = this.existsIngredient(ingredient);
    if(ingredientIndex !== -1){
      console.log(ingredient+' '+ingredientIndex);
      this.ingredients[ingredientIndex].amount++;
    }
    else{
      this.ingredients.push(ingredient);
    }
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  existsIngredient(ingredient: Ingredient) {
    var ingredientsSet = new Set(this.ingredients);
    ingredientsSet.has(ingredient)
    for(const [index, element] of this.ingredients.entries()){
      if (element.name === ingredient.name) {
        console.log('Found at '+index);
        return index;
      }
    }
    return -1;
  }

  addIngredients(ingredients: Ingredient[]) {
    // for(let ingredient of ingredients) {
    //   this.addIngredient(ingredient);
    // }
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  deleteIngredient(id: number){
    this.ingredients.splice(id, 1);
  }

  deleteAllIngredients(){
    this.ingredients.splice(0, this.ingredients.length);
  }
}
