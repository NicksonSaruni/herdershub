import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'cows',
  templateUrl: './cows.component.html',
  styleUrl: './cows.component.css'
})
export class CowsComponent {
  totalBulls: number = 10;
  totalCows: number = 80;
  totalCalves: number = 30;
  showRecords:boolean=false;
  lastBreedingDate: Date | undefined;
  pregnancyStatus: string | undefined;


 constructor(private router: Router) {

 }

  incrementBulls() {
    this.totalBulls++;
  }

  decrementBulls() {
    if (this.totalBulls > 0) {
      this.totalBulls--;
    }
  }

  incrementCows() {
    this.totalCows++;
  }

  decrementCows() {
    if (this.totalCows > 0) {
      this.totalCows--;
    }
  }

  incrementCalves() {
    this.totalCalves++;
  }

  decrementCalves() {
    if (this.totalCalves > 0) {
      this.totalCalves--;
    }
  }

  
  toggleRecords(){
    this.showRecords=!this.showRecords;
  }

  recordBreeding() {
    this.lastBreedingDate = new Date();
    // Assuming a cow gets pregnant after breeding
    // You can add more sophisticated logic here
    this.pregnancyStatus = 'Pregnant';
  }

}
