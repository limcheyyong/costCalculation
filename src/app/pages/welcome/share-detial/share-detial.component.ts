import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-share-detial',
  templateUrl: './share-detial.component.html',
  styleUrls: ['./share-detial.component.css'],
})
export class ShareDetialComponent implements OnInit {
  form: FormGroup;
  constructor() {}

  ngOnInit(): void {
    this.form = new FormGroup({
      item: new FormArray([]),
    });
    this.addItem();
  }
  get itemList(): FormArray {
    return this.form.get('item') as FormArray;
  }
  addItem(): void {
    (this.form.get('item') as FormArray).push(
      new FormGroup({
        detial: new FormControl(null),
        price: new FormControl(null),
      })
    );
  }
  submitForm(): void {}

  onRemove(i: number): void {
    this.itemList.removeAt(i);
  }
}
