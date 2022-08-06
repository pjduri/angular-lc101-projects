import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {

  favLinks = [
    'http://www.flamewatercircus.com/',
    'http://www.dark-monk.com/',
    'http://www.homeofpoi.com/us/'
  ]

  constructor() { }

  ngOnInit() {
  }

}
