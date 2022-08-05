import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'More Fire Pics';
  image1 = "https://scontent-atl3-1.xx.fbcdn.net/v/t31.18172-8/981034_549251351779666_8409105_o.jpg?_nc_cat=102&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=dotegohIcmUAX_B2PkH&_nc_ht=scontent-atl3-1.xx&oh=00_AT88yBOjzoZvY4S0x0ToSL8rO-K8ZCVa0pHbe450-XjLjw&oe=63105510";
  image2 = 'https://scontent-mia3-2.xx.fbcdn.net/v/t31.18172-8/1276212_10201914317243219_1394670898_o.jpg?_nc_cat=110&ccb=1-7&_nc_sid=e3f864&_nc_ohc=oXk3aq5205UAX8fsXHM&_nc_ht=scontent-mia3-2.xx&oh=00_AT86nvw-1T8fyUBgMiSG9B8GIfpnljzLG_3RqeaQ9zGagQ&oe=631135F7';
  image3 = 'https://scontent-atl3-1.xx.fbcdn.net/v/t31.18172-8/965830_550451611659640_744079158_o.jpg?_nc_cat=109&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=DwR4nCLaJKkAX_g5qKg&_nc_ht=scontent-atl3-1.xx&oh=00_AT_uWl7wlTpVT0G8YWoiyqs-SYNz_tJyOFcFSzHQ_ceJaw&oe=63112056';

  constructor() { }

  ngOnInit() {
  }

}