import { Component, Injectable, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { HttpClient, HttpHeaders } from '@angular/common/http';



const BASE_URL = "http://localhost:8080"

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent implements OnInit{

  todos: Todo[] = [];

  ngOnInit(): void {
    this.http.get<Todo[]>(`${BASE_URL}/todo`).subscribe((res: Todo[]) => this.todos = res )
  }

  constructor(private http: HttpClient) {
  }
}

