import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Card } from '../models/card';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private apiBaseUrl = environment.apiBaseUrl;

  constructor(private httpClient: HttpClient) { }

  getAllCards(): Observable<Card[]> {
    return this.httpClient.get<Card[]>(`${this.apiBaseUrl}/card/all`);
  }

  addCard(card: Card): Observable<Card> {
    return this.httpClient.post<Card>(`${this.apiBaseUrl}/card`, card);
  }

  eidtCard(card: Card): Observable<Card> {
    return this.httpClient.put<Card>(`${this.apiBaseUrl}/card`, card);
  }

  deleteCard(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.apiBaseUrl}/card/${id}`);
  }

}
