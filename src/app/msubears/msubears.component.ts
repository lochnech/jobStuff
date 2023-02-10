import { Component } from '@angular/core';

@Component({
  selector: 'app-msubears',
  templateUrl: './msubears.component.html',
  styleUrls: ['./msubears.component.css']
})
export class MSUBearsComponent {
  start() {
    for (let i = 1; i <= 100; i++) {
      if (i % 15 == 0) {
        console.log("MSUBears");
      } else if (i % 3 == 0) {
        console.log("MSU");
      } else if (i % 5 == 0) {
        console.log("Bears");
      } else {
        console.log(i);
      }
    }
  }
}
