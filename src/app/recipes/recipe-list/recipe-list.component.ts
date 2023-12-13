import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit{
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('Cool Ice Cream', 'Ice Cream Cone Splash', 'https://www.foodiesfeed.com/wp-content/uploads/2023/06/ice-cream-cone-splash.jpg')
  ];
  
  constructor(){
  }

  ngOnInit(): void {
    
  }
}
