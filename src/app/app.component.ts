import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  selectedAnimal = '';

  select(animal: string) {
    this.selectedAnimal = animal;
  }
}
