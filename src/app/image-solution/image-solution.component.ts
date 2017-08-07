import {Component, Input, OnInit} from '@angular/core';
import {StoreAndGenerateService} from '../store-and-generate.service';
import {DomSanitizer} from '@angular/platform-browser';


declare var $: any;

@Component({
  selector: 'app-image-solution',
  templateUrl: './image-solution.component.html',
  styleUrls: ['./image-solution.component.css'],
  providers: [StoreAndGenerateService]
})
export class ImageSolutionComponent implements OnInit {

  @Input() imageSrc = '';
  myDomSanit: DomSanitizer;

  constructor(private storeComponent: StoreAndGenerateService, domSanitizer: DomSanitizer) {
    this.myDomSanit = domSanitizer;
  }

  ngOnInit() {
    $('#button').hide();

  }

  getAll() {
    this.storeComponent.getAll().subscribe(res => console.log(res));
  }

  getSolution() {
    $('#button2').hide();
    this.storeComponent.getSolution(this.imageSrc).subscribe(data => this.imageSrc = 'data:image/png;base64,' + data);
  }
}
