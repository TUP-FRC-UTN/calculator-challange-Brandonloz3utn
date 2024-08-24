import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cal-actions',
  standalone: true,
  imports: [],
  templateUrl: './cal-actions.component.html',
  styleUrl: './cal-actions.component.css'
})
export class CalActionsComponent {
  @Output() operation = new EventEmitter<string>();
  @Output() borrar = new EventEmitter<void>();

  operar(operator: string) {
    this.operation.emit(operator);
  }

  limpiar() {
    this.borrar.emit();
  }
}
