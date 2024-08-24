import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CalActionsComponent } from "../cal-actions/cal-actions.component";

@Component({
  selector: 'app-cal-view',
  standalone: true,
  imports: [CalActionsComponent],
  templateUrl: './cal-view.component.html',
  styleUrl: './cal-view.component.css'
})
export class CalViewComponent 
{@Input() valor1: number | null = null;
  @Input() valor2: number | null = null;
  @Input() resultado: number | string = '';

  @Output() valor1enviar = new EventEmitter<number>();
  @Output() valor2enviar = new EventEmitter<number>();

  ValorSend1(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const parsedValue = Number(inputElement.value);
    this.valor1enviar.emit(parsedValue);
  }

  ValorSend2(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const parsedValue = Number(inputElement.value);
    this.valor2enviar.emit(parsedValue);
  }

}
