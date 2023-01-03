import { Component } from '@angular/core';

@Component({
  selector: 'app-form-comp',
  templateUrl: './form-comp.component.html',
  styleUrls: ['./form-comp.component.css'],
})
export class FormCompComponent {
  loginUser(item: any) {
    console.log(item);
  }
}
