import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {StoreAndGenerateService} from '../store-and-generate.service';
import {Children} from '../children';
import swal from 'sweetalert2';
import {ToasterService} from 'angular2-toaster';
import {Http} from '@angular/http';


declare var $: any;

@Component({
  selector: 'app-form-children',
  templateUrl: './form-children.component.html',
  styleUrls: ['./form-children.component.css'],
  providers: [StoreAndGenerateService]
})
export class FormChildrenComponent implements OnInit {

  child: FormGroup;
  private toasterService: ToasterService;
  @Input() listChildrenID: string[] = [];

  // Tenis club coords
  lat = 40.4440016;

  lng = 0.3862489;
  marker: MyMarker = {
    lat: this.lat,
    lng: this.lng,
    label: 'Inicio',
    draggable: true
  };

  @Input() validForm = true;

  constructor(public storeComponent: StoreAndGenerateService, toasterService: ToasterService,
              private http: Http, private fb: FormBuilder) {
    this.toasterService = toasterService;
    this.buildForm();
  }

  ngOnInit() {
    $('#button').hide();
    this.storeComponent.getAllChildren().forEach(c => this.listChildrenID.push(c.id));
  }


  clickMarker($event) {
    this.marker.lat = $event.coords.lat;
    this.marker.lng = $event.coords.lng;
    this.child.patchValue({
      x: this.marker.lat,
      y: this.marker.lng,
    });
  }

  buildForm() {
    this.child = this.fb.group({
      id: ['', Validators.required],
      cost: ['', Validators.required],
      x: ['', Validators.required],
      y: ['', Validators.required]
    });

    this.child.patchValue({
      cost: 1
    });
  }

  /**
   *
   * @param {any} value of the form representing a child
   */
  // TODO make use of Window.sessionStorage for saving current childs
  onSubmit() {

    const myChild = new Children(this.child.value.id, this.child.value.x, this.child.value.y, this.child.value.cost);
    myChild.cost <= 0 ? myChild.cost = 1 : myChild.cost = this.child.value.cost;
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
        this.toasterService.pop('success', 'Niño con ID ' + myChild.id, 'Añadido Correctamente');
        this.validForm = true;
        this.listChildrenID.push(myChild.id);
      }
    }
    this.http.get(this.storeComponent.getAPIURL()).map(res => res.text()).subscribe(data => console.log('Server OK ', data));

  }

  eventDoubleClick(event) {
    const childID = event.target.lastChild.textContent;
    this.storeComponent.deleteChildrenById(childID);
    this.toasterService.pop('info', 'Niño con ID ' + childID, 'Borrado Correctamente');
  }


}

export interface MyMarker {
  lat: number;
  lng: number;
  label?: string,
  draggable: boolean;
}
