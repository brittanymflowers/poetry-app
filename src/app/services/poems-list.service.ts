import { Injectable } from '@angular/core';
import { Poem } from '../interfaces/poem.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PoemsListService {
  private poemsList = new BehaviorSubject<Poem[]>([]);
  poemsList$ = this.poemsList.asObservable();

  updatePoemsList(newData: Poem[]) {
    this.poemsList.next(newData);
  }
}
