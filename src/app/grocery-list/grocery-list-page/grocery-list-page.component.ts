import { Component, OnInit } from '@angular/core';
import { GroceryListService } from 'src/app/services/grocery-list.service';
import { Ingredient } from 'src/app/models/ingredient.model';

@Component({
  selector: 'app-grocery-list-page',
  templateUrl: './grocery-list-page.component.html',
  styleUrls: ['./grocery-list-page.component.scss']
})
export class GroceryListPageComponent implements OnInit {

  private groceries: Ingredient[] = []

  constructor(private groceryListService: GroceryListService) { }

  ngOnInit() {
    this.groceries = this.groceryListService.getGroceries()
  }

}
