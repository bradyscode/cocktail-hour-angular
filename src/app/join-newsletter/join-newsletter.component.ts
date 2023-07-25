import { Dialog } from '@angular/cdk/dialog';
import { Component, Inject, NgModule, Sanitizer } from '@angular/core';
import {MatDialogModule, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { SecurityContext } from '@angular/core';
import { AddUserEmailService } from '../add-user-email.service';

@Component({
  selector: 'app-join-newsletter',
  templateUrl: './join-newsletter.component.html',
  styleUrls: ['./join-newsletter.component.css'],
})
export class JoinNewsletterComponent {
  modalTitle: string;
  email: string;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private _sanitizer: DomSanitizer, private emailService: AddUserEmailService) {
  this.modalTitle = data.title;
  this.email = data.email;
  }
  saveEmail () {
    // following line prevents from xss
    const sanatized = this._sanitizer.sanitize(SecurityContext.HTML, this.data.email);
    console.log(sanatized);
    const emails = this.emailService.getEmails();
    console.log(emails);
  }
}
