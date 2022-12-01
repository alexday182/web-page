import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private http: HttpClient) {}
  sendMessage(message: object) {
    return this.http.post(
      'https://me-app-58a4e-default-rtdb.firebaseio.com/messages.json',
      message
    );
  }
}
