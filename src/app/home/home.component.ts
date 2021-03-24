import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  user: any;
  constructor(private router: Router) {
    if (this.router.getCurrentNavigation()?.extras.state) {
      this.user = this.router.getCurrentNavigation()?.extras.state;
    }
    // this.user.name = `${this.user.gender === true ? 'Mr.' : 'Mrs.'} ${
    //   this.user.firstName
    // }`;
  }
  ngOnInit(): void {}
}
