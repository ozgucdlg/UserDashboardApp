import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
  users:any[]=[];
  constructor(private UserService:UserService){

  }
  ngOnInit(): void {
  this.UserService.getUser().subscribe((response)=> {
    this.users=response;
  })
  }

}
