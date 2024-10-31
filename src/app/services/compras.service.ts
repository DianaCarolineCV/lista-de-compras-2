import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  private apiUrl = 'http://localhost:3000/items';

  constructor(private http: HttpClient) {}

  getItems(): Observable<{ id: number; name: string; bought: boolean }[]> {
    return this.http.get<{ id: number; name: string; bought: boolean }[]>(this.apiUrl);
  }

  addItem(item: { name: string; bought: boolean }): Observable<{ id: number; name: string; bought: boolean }> {
    return this.http.post<{ id: number; name: string; bought: boolean }>(this.apiUrl, item);
  }

  toggleItemStatus(name: string, id: number, status: boolean): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, { name, bought: status });
  }

  removeItem(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}