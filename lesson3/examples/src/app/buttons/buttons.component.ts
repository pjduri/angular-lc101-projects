import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'buttons',
   templateUrl: './buttons.component.html',
   styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
   buttonHeading: string = "Buttons"
   jokeButtonHeading: string = "Joke Buttons"
   inactive: boolean = false;
   buttonPressed: boolean[] = [false, false, false]
   location: string = 'center'

   constructor() { }

   ngOnInit() { }

   resetButtons () {
      for (let i=0; i<this.buttonPressed.length; i++) {
         this.buttonPressed[i] = false
      }
   }

   moveButton (oldLocation: string) {
      while (this.location === oldLocation) {
         this.location = ['left', 'right', 'center'][Math.floor(Math.random() * 3)]
      }
      return this.location
   }
   
}

