import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-root',
  template: `
    <app-nav></app-nav>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
  `,
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HttpClientModule
  ],
  providers: [ApiService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  data$?: Observable<any>;

  constructor(private apiService: ApiService) {}
  title = 'sst-academy';

  ngOnInit() {

    this.data$ = this.apiService.getData();


    this.data$.subscribe({
      next: (data) => {
        console.log('Received data:', data);
      },
      error: (error) => {
        console.error('Error:', error);
      },
      complete: () => {
        console.log('Subscription completed');
      }
    });
  }
}
