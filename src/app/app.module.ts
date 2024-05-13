import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatListModule } from '@angular/material/list';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { sidenavComponent } from './sidenav/sidenav.component';
import { CowsComponent } from './cows/cows.component';
import { GoatsComponent } from './goats/goats.component';
import { SheepsComponent } from './sheeps/sheeps.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule



@NgModule({
  declarations: [
    AppComponent,
    sidenavComponent,
    CowsComponent,
    GoatsComponent,
    SheepsComponent,
    DashboardComponent,
    LoginComponent
  ],
  imports: [
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    BrowserModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
