
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  standalone: true,
  imports: [MatButtonModule, MatTooltipModule, MatButtonModule];
  styles: [`
  :host {
    display: block;
    background-image: url('src\assets\homefond.jpg');
    background-size: cover; 
    background-repeat: no-repeat;
    background-position: center center;
    height: 100vh; 
  }
`]
})

export class HomeComponent {}

