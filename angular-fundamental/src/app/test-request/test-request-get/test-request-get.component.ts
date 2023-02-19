import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Users } from './test-request-get';

@Component({
  selector: 'app-test-request-get',
  templateUrl: './test-request-get.component.html',
  styleUrls: ['./test-request-get.component.css'],
})
export class TestRequestGetComponent {
  users: Users[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit() {}

  searchUserList(name: string): void {
    this.http
      .get<Users[]>(`https://jsonplaceholder.typicode.com/users?name=${name}`)
      .subscribe((data) => {
        this.users = data;
      });
  }
}
