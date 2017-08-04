import {Component, OnInit} from '@angular/core';
import {StoreAndGenerateService} from '../store-and-generate.service';

@Component({
  selector: 'app-form-van',
  templateUrl: './form-van.component.html',
  styleUrls: ['./form-van.component.css'],
  providers: [StoreAndGenerateService]
})
export class FormVanComponent implements OnInit {

  constructor(private storeAndGenerate: StoreAndGenerateService) {
  }

  ngOnInit() {
    console.log('Preparing...');
    console.log(this.storeAndGenerate.size());
  }

}
