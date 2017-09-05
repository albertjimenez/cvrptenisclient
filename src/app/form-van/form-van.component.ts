import {Component, Input, OnInit} from '@angular/core';
import {StoreAndGenerateService} from '../store-and-generate.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import swal from 'sweetalert2';
import {ToasterService} from 'angular2-toaster';
import {Van} from '../van';
import 'rxjs/add/operator/map';
import {Http} from '@angular/http';
import {MyMarker} from '../form-children/form-children.component'


declare var $: any;


@Component({
  selector: 'app-form-van',
  templateUrl: './form-van.component.html',
  styleUrls: ['./form-van.component.css'],
  providers: [StoreAndGenerateService]
})
export class FormVanComponent implements OnInit {

  van: FormGroup;

  private toasterService: ToasterService;
  @Input() listVansID: string[] = [];

  @Input() validForm = true;

  lat = 40.4440016;

  lng = 0.3862489;
  marker: MyMarker = {
    lat: this.lat,
    lng: this.lng,
    label: 'Inicio',
    draggable: true
  };
  endMarker: MyMarker = {
    lat: this.lat,
    lng: this.lng,
    label: 'Fin',
    draggable: true
  };

  constructor(public storeComponent: StoreAndGenerateService, toasterService: ToasterService,
              private http: Http, private fb: FormBuilder) {
    this.toasterService = toasterService;
    this.buildForm();
  }

  ngOnInit() {
    $('#button').hide();
    this.storeComponent.getAllVans().forEach(van => this.listVansID.push(van.id))

  }

  buildForm() {
    this.van = this.fb.group({
      id: ['', Validators.required],
      capacity: ['', Validators.required],
      x: ['', Validators.required],
      y: ['', Validators.required],
      endx: '',
      endy: ''
    });
  }

  onSubmit() {

    this.http.get(this.storeComponent.getAPIURL()).map(res => res.text()).subscribe(data => console.log('Server OK ', data));

    const myVan = new Van(this.van.value.capacity, this.van.value.id, this.van.value.x, this.van.value.y,
      this.van.value.endx, this.van.value.endy);


    if (this.van.valid) {

      if (isNaN(Number(myVan.endX)) || isNaN(Number(myVan.endY))) {
        myVan.endX = myVan.x;
        myVan.endY = myVan.y;
      }

      if (!this.storeComponent.storeVan(myVan)) {
        this.validForm = false;
        swal({
          title: 'Error!',
          text: 'Revisa el campo ID ya que se encuentra repetido con otro vehículo',
          type: 'error',
          confirmButtonText: 'Ok'
        });
      } else {
        this.toasterService.pop('success', 'Vehículo con ID ' + myVan.id, 'Añadido Correctamente');
        this.validForm = true;
        this.listVansID.push(myVan.id);
      }
    }
  }

  eventDoubleClick(event) {
    const vanID = event.target.lastChild.textContent;
    this.storeComponent.deleteVanById(vanID);
    this.toasterService.pop('info', 'Vehículo con ID ' + vanID, 'Borrado Correctamente');
  }

  mapClicked($event) {
    this.marker.lat = $event.coords.lat;
    this.marker.lng = $event.coords.lng;
    this.van.patchValue({
      x: this.marker.lat,
      y: this.marker.lng,
    });
  }

  mapDblClicked($event) {
    this.endMarker = {
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true,
      label: 'Fin'
    };
    this.van.patchValue({
      endx: this.endMarker.lat,
      endy: this.endMarker.lng,
    });
  }

  deleteEndMarker() {
    this.endMarker = null;
    this.van.patchValue({
      endx: '',
      endy: '',
    });
  }

  dragMarker($event, isInitial = true) {
    if (isInitial) {
      this.mapClicked($event);
    } else {
      this.mapDblClicked($event);
    }
  }
}

