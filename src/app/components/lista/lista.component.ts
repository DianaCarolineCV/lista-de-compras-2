import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ShoppingListService } from "../../services/compras.service";
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, ItemComponent],
})
export class ListaComponent implements OnInit {
  items: { id: number; name: string; bought: boolean }[] = [];
  newItemName: string = '';
  errorMessage: string = '';

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.loadItems();
  }

  loadItems() {
    this.shoppingListService.getItems().subscribe(
      (items: { id: number; name: string; bought: boolean }[]) => {
        this.items = items;
      },
      (error: any) => {
        console.error('Erro ao carregar itens:', error);
      }
    );
  }

  addItem() {
    if (this.newItemName.trim()) {
      const newItem = { name: this.newItemName, bought: false };
      this.shoppingListService.addItem(newItem).subscribe(
        (item: { id: number; name: string; bought: boolean }) => {
          this.items.push(item);
          this.newItemName = '';
          this.errorMessage = '';
        },
        (error: any) => {
          this.errorMessage = 'Erro ao adicionar item.';
        }
      );
    } else {
      this.errorMessage = 'Escreva um item para adicioná-lo na lista!';
      setTimeout(() => {
        this.errorMessage = '';
      }, 1000);
    }
  }

  toggleBought(index: number) {
    const item = this.items[index];
    this.shoppingListService.toggleItemStatus(item.name, item.id, !item.bought).subscribe(() => {
      item.bought = !item.bought; 
    });
  }

  removeItem(index: number) {
    const item = this.items[index];
    this.shoppingListService.removeItem(item.id).subscribe(() => {
      this.items.splice(index, 1); 
    });
  }
}