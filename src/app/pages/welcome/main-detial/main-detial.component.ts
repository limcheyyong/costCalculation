import { FormControl, FormGroup } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-main-detial',
  templateUrl: './main-detial.component.html',
  styleUrls: ['./main-detial.component.css'],
})
export class MainDetialComponent implements OnInit {
  @Output() mainDetial = new EventEmitter();

  form: FormGroup;
  constructor() {}

  ngOnInit(): void {
    this.initialForm();
    this.form.valueChanges.subscribe((data) => {
      this.mainDetial.emit(data);
    });
  }
  initialForm(): void {
    this.form = new FormGroup({
      buyDate: new FormControl(null),
      area: new FormControl(null),
    });
  }
}
