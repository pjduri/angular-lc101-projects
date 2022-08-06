import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   chores = ['Complete LaunchCode prep work', 'Buy groceries', 'Empty trash'];
   finishedChores = ['GA5', 'Empty dishwasher', 'Remember === instead of = for your numbers', 
      'Add some items to finishedChores to make the page change', 'Need one more to get the target up', 'This should be the last one'];

   // provided target image doesn't work
   // targetImage = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
   targetImage = 'https://image.shutterstock.com/image-vector/shot-target-260nw-768017731.jpg'
   
   constructor() { }

   ngOnInit() {
   }

}
