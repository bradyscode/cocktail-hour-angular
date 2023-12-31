import { Component, OnInit} from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { JoinNewsletterComponent } from './join-newsletter/join-newsletter.component';
import { AlcoholWarningComponent } from './alcohol-warning/alcohol-warning.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  email:string;
  mobile: boolean;
  title = 'cocktail-hour-angular';
  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
    if (window.screen.width <= 1000) {
      this.mobile = true;
    }

    this.dialog.open(AlcoholWarningComponent, {
      width: '500px'
    });

  }
  openDialog() {
    const dialogRef = this.dialog.open(JoinNewsletterComponent, {
      data: {title: 'Subscribe to our newsletter!', email: this.email},
    });

    dialogRef.afterClosed().subscribe(result => {
      this.email = result;
    });
    }

}
