import { Component } from '@angular/core';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    let dialogRef;

    dialogRef = this.dialog.open(DialogComponent, {
      maxWidth: '100vW',
      height: '80%',
      width: '100%',
      position: { bottom: '0px' },
    });
  }
  openDialogLogin() {
    let dialogLogin;

    dialogLogin = this.dialog.open(LoginComponent, {
      maxWidth: 'fit-content',
      height: 'auto',
      width: 'auto',
      maxHeight:'fit-content',


    });
  }
}
