import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { setTheme } from 'ngx-bootstrap/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Dating App';
  users: any;

  constructor(private http: HttpClient) { 
    setTheme('bs4');
   }
  ngOnInit() {
    this.getUsers()
  }

  getUsers(){
    this.http.get('https://localhost:7180/api/Users').subscribe(data => {
      this.users = data;
      console.log(this.users);
    }, error => {
      console.log(error);
    });
  }
}
