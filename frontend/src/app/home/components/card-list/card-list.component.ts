import { Component, OnInit } from '@angular/core';
import { Note } from '../../../models/note';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  public notesList:Note[]=[
    {id:1, title: "dfdfdf" ,content:`cdcdwwwwwww wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww wwwwwwwwwwwwwwwwwwwwwwwwwwwwwww < wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
    wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
    w
    w
    w
      

    w
    w
    w
    w
    w
    w
    w
    w

    w
    w
    w
    w

    w
    ww
    w
    w
    w
    w
    w
    w
    w
    w
    w

    wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
    wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww`},
    {id:1, title: "dfdfdf" ,content:"cdcd"},
    {id:1, title: "dfdfdf" ,content:"cdcd"},
    {id:1, title: "dfdfdf" ,content:"cdcd"},
    {id:1, title: "dfdfdf" ,content:"cdcd"},
    {id:1, title: "dfdfdf" ,content:"cdcd"},
    {id:1, title: "dfdfdf" ,content:"cdcd"},
    {id:1, title: "dfdfdf" ,content:"cdcd"},
    {id:1, title: "dfdfdf" ,content:"cdcd"},
    {id:1, title: "dfdfdf" ,content:"cdcd"},
    {id:1, title: "dfdfdf" ,content:"cdcd"},
    {id:1, title: "dfdfdf" ,content:"cdcd"},
    {id:1, title: "dfdfdf" ,content:"cdcd"},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
