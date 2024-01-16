import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  // Example function to get data from your PHP backend
  public getData(): Observable<any> {
    return this.httpClient.get('http://localhost:8080/test_data.php');
  }
}
