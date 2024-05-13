import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CowsComponent } from './cows/cows.component';
import { GoatsComponent } from './goats/goats.component';
import { SheepsComponent } from './sheeps/sheeps.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { sidenavComponent} from './sidenav/sidenav.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect to login component
  { path: 'login', component: LoginComponent },


// {path: 'dashboard',component: DashboardComponent},
//  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
{ path: 'cows', component: CowsComponent },
{ path: 'goats', component: GoatsComponent },
{ path: 'sheeps', component: SheepsComponent }
    
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
