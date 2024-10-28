import { Injectable } from '@angular/core';
import { Poem } from '../interfaces/poem.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SelectedPoemService {
  private selectedPoem = new BehaviorSubject<Poem>({} as Poem);
  selectedPoem$ = this.selectedPoem.asObservable();

  updateSelectedPoem(newPoem: Poem) {
    this.selectedPoem.next(newPoem);
  }
}
