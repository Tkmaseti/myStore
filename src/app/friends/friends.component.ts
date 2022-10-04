import { FriendsService } from './../services/friends.service';

export class Friend {
  constructor(
    public id: number,
    public email: string,
    public password: string,
    public name: string,
    public role: string,
    public country: string
  ) {}
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  friends: Friend[];
  constructor(
    private frinedsService: FriendsService
  ) { }

  ngOnInit(): void {
    this.getFriends()
  }
  getFriends(){
    this.frinedsService.getFriends().subscribe(
      response => {
        console.log(response);
        this.friends = response;
      },
      err => console.error(err.message)
    );
  }

}

let url = "https://api.escuelajs.co/api/v1/users"
fetch(url)
    .then(res=>res.json())
        .then(json => localStorage.setItem("users", JSON.stringify(json)))

