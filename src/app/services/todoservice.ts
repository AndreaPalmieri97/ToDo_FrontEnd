import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class MyService {
  constructor(private http: HttpClient) {}

  fetchData() {
    const token = localStorage.getItem('token');

    if (token) {
      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`,
      });

      const options = {
        headers: headers,
      };

      this.http
        .get('http://localhost:8080/todo', options)
        .subscribe(
          (response) => {
            // Gestisci la risposta qui
          },
          (error) => {
            // Gestisci gli errori qui
          }
        );
    }
  }
}
