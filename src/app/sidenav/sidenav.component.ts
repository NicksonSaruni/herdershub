import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class sidenavComponent {

constructor(private router:Router){}
oncows(){this.router.navigate(['cows'])}
}
