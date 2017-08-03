import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-children',
  templateUrl: './form-children.component.html',
  styleUrls: ['./form-children.component.css']
})
export class FormChildrenComponent implements OnInit {

  child: FormGroup;


  constructor() {
  }

  ngOnInit() {
    this.child = new FormGroup({
      cost: new FormControl(''),
      id: new FormControl('', Validators.required),
      x: new FormControl('', Validators.required),
      y: new FormControl('', Validators.required)
    });

  }

  /**
   *
   * @param {any} value of the form representing a child
   * @param {boolean} valid Indicate if is valid or not
   */
  onSubmit() {
    // TODO once we pass to new component -> van, mandatory verify the ID
    this.child.valid ? console.log(this.child.value) : console.log('Invalid form');
  }

}
