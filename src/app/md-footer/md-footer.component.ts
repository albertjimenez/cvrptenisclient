import {Component, OnInit} from '@angular/core';
import {MdDialog} from '@angular/material';
import {DialogComponent} from '../dialog/dialog.component';

@Component({
  selector: 'app-md-footer',
  templateUrl: './md-footer.component.html',
  styleUrls: ['./md-footer.component.css', '../../../node_modules/animate.css/animate.min.css']
})
export class MdFooterComponent implements OnInit {

  constructor(public dialog: MdDialog) {
  }

  ngOnInit() {
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent, {});
  }
}
