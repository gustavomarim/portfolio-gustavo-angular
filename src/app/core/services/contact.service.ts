import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Response } from '../models/Response';
import { Enacom } from './../models/Enacom';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private readonly API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  get(): Observable<Response<Enacom>> {
    return this.http.get<Response<Enacom>>(this.API_URL);
  }
}
