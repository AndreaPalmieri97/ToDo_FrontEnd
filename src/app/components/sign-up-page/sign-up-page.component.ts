import {Component, Input} from '@angular/core';
import {NgForm} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
@Injectable({
  providedIn: 'root'
})

export class SignUpPageComponent {
  constructor(private http: HttpClient, private router: Router) {}
  @Input() utente: User | null = null
  signup(form: NgForm): void {
    const username: string = this.generateUsername(form.value.nome, form.value.cognome);

    form.value.username = username;

    //console.log(form.value)

    this.http.post<Response>('http://localhost:8080/auth/signup', form.value)
      .subscribe(response  => {
        console.log('Registrazione riuscita:', response.token);

        localStorage.setItem('token', response.token);

        this.router.navigate(['/todo']);
      }, error => {
        console.error('Errore durante la registrazione:', error.error);
        this.router.navigate(['/signup']);
      });
  }
  generateUsername(nome: string, cognome: string): string {
    return (nome + "_" + cognome).toLowerCase();
  }
}
interface User{
  nome: string,
  cognome: string,
  email: string,
  username: string
  password: string
}
interface Response{
  token: string;
}
