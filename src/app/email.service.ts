import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private baseURL = '';

  constructor(private http: HttpClient) { }

  saveEmail(email: string) {
    return this.http.post(`${this.baseURL}/save-email`, { Email: email });
  }

  getEmails() {
    return this.http.get(`${this.baseURL}/get-emails`);
  }
}
