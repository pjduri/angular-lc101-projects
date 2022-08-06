import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fun-gif',
  templateUrl: './fun-gif.component.html',
  styleUrls: ['./fun-gif.component.css']
})
export class FunGifComponent implements OnInit {

  imageTitle = 'Coding';
  image = 'https://gist.github.com/patevs/b007a0e98fb216438d4cbf559fac4166/raw/88f20c9d749d756be63f22b09f3c4ac570bc5101/programming.gif'

  constructor() { }

  ngOnInit() {
  }

}
