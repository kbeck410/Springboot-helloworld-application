import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Message } from '../modal/message';

@Injectable({
  providedIn: 'root'
})
export class HelloWordService {

  constructor(private http: HttpClient) { }

  helloWorldService() {
    return this.http.get<Message>('http://localhost:8090/api/v1/greeting');
  }
}
