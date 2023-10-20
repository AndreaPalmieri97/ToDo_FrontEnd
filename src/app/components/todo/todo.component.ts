import {Component, Input, OnInit} from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { HttpClient, HttpHeaders } from '@angular/common/http';



const BASE_URL = "http://localhost:8080"

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent {

  todos: Todo[] = [];

  token: string | null = localStorage.getItem('token');

  active = false

  sendRequestWithCustomHeader() {
    this.active = !this.active;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token,
    });

    console.log(this.token)

    const httpOptions = {
      headers: headers
    };

    this.http.get<Todo[]>(`${BASE_URL}/todo`,httpOptions)
      .subscribe(response => {
        this.todos=response;
      })
    console.log(this.todos)
  }

  constructor(private http: HttpClient) {

  }
}

