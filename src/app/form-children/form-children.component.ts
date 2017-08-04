import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {StoreAndGenerateService} from '../store-and-generate.service';
import {Children} from '../children';
import swal from 'sweetalert2';


@Component({
  selector: 'app-form-children',
  templateUrl: './form-children.component.html',
  styleUrls: ['./form-children.component.css'],
  providers: [StoreAndGenerateService]
})
export class FormChildrenComponent implements OnInit {

  child: FormGroup;
  @Input() validForm = true;


  constructor(private storeComponent: StoreAndGenerateService) {

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
   * @return {boolean}
   */
  // TODO make use of Window.sessionStorage for saving current childs
  onSubmit() {
    const myChild = new Children(this.child.value.id, this.child.value.x, this.child.value.y, this.child.value.cost);
    if (this.child.valid) {
      if (!this.storeComponent.storeChildren(myChild)) {
        this.validForm = false;
        swal({
          title: 'Error!',
          text: 'Revisa el campo ID ya que se encuentra repetido con otro niño',
          type: 'error',
          confirmButtonText: 'Ok'
        });
      } else {
        this.validForm = true;
      }
    }

  }


}
