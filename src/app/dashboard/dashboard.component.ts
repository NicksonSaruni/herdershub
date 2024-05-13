import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',

  
})


export class DashboardComponent implements OnInit {

  itemType: string | undefined;
  access: any;
  title: any;

 constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.title = data['title'];

    });

  }  
 
    

}
