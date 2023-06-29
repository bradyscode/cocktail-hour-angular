import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { JoinNewsletterComponent } from './join-newsletter/join-newsletter.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  email:string;
  title = 'cocktail-hour-angular';
  constructor(public dialog: MatDialog) {}
  openDialog() {
    // const dialogConfig = new MatDialogConfig();
    // dialogConfig.disableClose = true;
    // dialogConfig.autoFocus = true;
    // dialogConfig.data = {
    // title: 'Sign up for our weekly newsletter!',
    // email: this.email
    // };
    
    const dialogRef = this.dialog.open(JoinNewsletterComponent, {
      data: {title: 'Subscribe to our newsletter!', email: this.email},
    });

    dialogRef.afterClosed().subscribe(result => {
      this.email = result;
    });
    }

}
