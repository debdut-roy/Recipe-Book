import { Component, ElementRef, 
  // EventEmitter, 
  OnInit, 
  // Output, 
  ViewChild 
} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  
  ingredients: Ingredient[] = [];
  @ViewChild('nameInput') ingredientName : ElementRef;
  @ViewChild('amountInput') ingredientAmount : ElementRef;
  // @Output() ingredientAdded = new EventEmitter<Ingredient>();
  
  constructor(private shoppingListService : ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem() {
    const name = this.ingredientName.nativeElement.value;
    const amount = this.ingredientAmount.nativeElement.value;
    const newIngredient = new Ingredient(name, amount);
    // this.ingredientAdded.emit(newIngredient);
    this.shoppingListService.addIngredient(newIngredient);
  }    

  onDeleteItem(){
    
  }

}
