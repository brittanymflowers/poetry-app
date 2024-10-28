import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Poem } from '../interfaces/poem.interface';

@Injectable({
  providedIn: 'root',
})
export class PoemsService {
  private baseUrl = 'https://poetrydb.org';

  constructor(private http: HttpClient) {}

  getPoemsList(type: string, searchTerm: string): Observable<Poem[]> {
    const thisType = type === 'Author' ? 'author' : 'title';

    return this.http.get<Poem[]>(`${this.baseUrl}/${thisType}/${searchTerm}`);
  }
}
