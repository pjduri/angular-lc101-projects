import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'More Fire Pics';
  image1 = 'https://scontent-atl3-1.xx.fbcdn.net/v/t31.18172-8/981034_549251351779666_8409105_o.jpg?_nc_cat=102&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=dotegohIcmUAX_B2PkH&_nc_ht=scontent-atl3-1.xx&oh=00_AT88yBOjzoZvY4S0x0ToSL8rO-K8ZCVa0pHbe450-XjLjw&oe=63105510';
  image2 = 'https://scontent-atl3-1.xx.fbcdn.net/v/t31.18172-8/919514_550450294993105_2125839297_o.jpg?_nc_cat=106&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=uaYzVv4HRkEAX-vVMXt&tn=Xg9U1beEexhn49wx&_nc_ht=scontent-atl3-1.xx&oh=00_AT_k_BcKSJ0SZ_iHtDJ_brDhuM_6x9nud61SGDTdNCobKA&oe=631262E6';
  image3 = 'https://scontent-atl3-1.xx.fbcdn.net/v/t31.18172-8/965830_550451611659640_744079158_o.jpg?_nc_cat=109&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=DwR4nCLaJKkAX_g5qKg&_nc_ht=scontent-atl3-1.xx&oh=00_AT_uWl7wlTpVT0G8YWoiyqs-SYNz_tJyOFcFSzHQ_ceJaw&oe=63112056';

  constructor() { }

  ngOnInit() {
  }

}