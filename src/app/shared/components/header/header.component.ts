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

    if(screen.width<500){
      dialogRef = this.dialog.open(DialogComponent, {
        maxWidth: '100vW',
        height: '80%',
        width: '100%',
        position: {bottom: '0px'}

      });
    }else{
      dialogRef = this.dialog.open(DialogComponent, {
        maxWidth: '100vW',
        height: '80%',
        width: '100%',
        position: {bottom: '0px'},

      });
    }

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

  }

}
