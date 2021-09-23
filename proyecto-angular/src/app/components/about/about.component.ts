import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public title: string;
  public subtitle: string;
  public email: string;


  constructor() {
    this.title = "Marti Borislavov Kroumov";
    this.subtitle = "Programador junior";
    this.email = "marti_bk@hotmail.com";
  }

  ngOnInit(): void {
  }

}
