import { Component } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-fib',
  templateUrl: './fib.component.html',
  styleUrls: ['./fib.component.css']
})

export class FibComponent {
  inputForm: FormGroup;

  constructor() {
    this.inputForm = new FormGroup({
      inputText: new FormControl('',)
    });
  }

  onSubmit() {
    let x = this.inputForm.value.inputText;
    console.log(this.f(x));
  }

  f(n: number): number {
    if (n == 0 || n == 1) {
      return 1;
    } else {
      return (this.f(n-1) + this.f(n-2));
    }
  }

}
