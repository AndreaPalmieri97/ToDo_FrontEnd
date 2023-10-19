import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  constructor(private http: HttpClient, private router: Router) {}
  login(form: NgForm): void {


    this.http.post<Response>('http://localhost:8080/auth/login', form.value)
      .subscribe(response  => {
        console.log('login fatto con successo:', response.token);

        localStorage.setItem('token_login', response.token);

        console.log(localStorage.getItem('token_login'))

        if(response.token){
          this.router.navigateByUrl('todo');
        }
      });
  }
}
interface Response{
  token: string;
}
