import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class ItemComponent {
  @Input() item: { id: number; name: string; bought: boolean } | undefined;
  @Input() index: number | undefined;

  @Output() remove = new EventEmitter<number>();
  @Output() toggleBought = new EventEmitter<number>();

  itemName: string = '';

  ngOnInit() {
    if (this.item) {
      this.itemName = this.item.name;
    }
  }

  editName(newName: string) {
    if (this.item) {
      this.item.name = newName;
    }
  }

  onRemove() {
    if (this.index !== undefined) {
      this.remove.emit(this.index);
    }
  }

  onToggleBought() {
    if (this.index !== undefined) {
      this.toggleBought.emit(this.index);
    }
  }
}