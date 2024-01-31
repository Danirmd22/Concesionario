import { Component } from '@angular/core';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(public dialog: MatDialog) {

  }

  openDialog() {
    let dialogRef;

    dialogRef = this.dialog.open(DialogComponent, {
      maxWidth: '100vW',
      height: '80%',
      width: '100%',
      position: {bottom: '0px'},

    });


  }

}
