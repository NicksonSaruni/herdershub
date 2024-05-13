import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-goats',
  templateUrl: './goats.component.html',
  styleUrl: './goats.component.css'
})
export class GoatsComponent {





  totalGoats: number = 300;
  totalBillyGoats: number = 40;
  totalKids: number = 150;
  showRecords:boolean=false;
 constructor(private router: Router) {

 }

  incrementGoats() {
    this.totalGoats++;
  }

  decrementGoats() {
    if (this.totalGoats > 0) {
      this.totalGoats--;
    }
  }

  incrementBillyGoats() {
    this.totalBillyGoats++;
  }

  decrementBillyGoats() {
    if (this.totalGoats > 0) {
      this.totalGoats--;
    }
  }

  incrementKids() {
    this.totalKids++;
  }

  decrementKids() {
    if (this.totalKids > 0) {
      this.totalKids--;
    }
  }

  


  toggleRecords(){
    this.showRecords=!this.showRecords;
  }

}
