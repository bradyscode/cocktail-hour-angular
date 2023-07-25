import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class AddUserEmailService {
  getEmails() {
    return axios.get('');
  }
  constructor() { }
}
