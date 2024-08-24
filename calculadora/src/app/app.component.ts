import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalViewComponent } from './cal-view/cal-view.component';
import { CalActionsComponent } from './cal-actions/cal-actions.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CalViewComponent,CalActionsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'calculadora';
  valor1: number | null = null;
  valor2: number | null = null;
  resultado: number | string = '';

  operacion(operador: string) {
    if (this.valor1 !== null && this.valor2 !== null) {
      switch(operador) {
        case '+':
          this.resultado = this.valor1 + this.valor2;
          break;
        case '-':
          this.resultado = this.valor1 - this.valor2;
          break;
        case '*':
          this.resultado = this.valor1 * this.valor2;
          break;
        case '/':
          this.resultado = this.valor1 / this.valor2;
          break;
        case '^':
          this.resultado = Math.pow(this.valor1, this.valor2);
          break;
      }
    } else {
      this.resultado = 'Tiene que colocar los 2 numeros';
    }
  }

  limpiar() {
    this.valor1 = null;
    this.valor2 = null;
    this.resultado = '';
  }
}
