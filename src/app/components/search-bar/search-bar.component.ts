import { Component, Input } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { PoemsService } from '../../services/poems.service';
import { PoemsListService } from '../../services/poems-list.service';
import { Poem } from '../../interfaces/poem.interface';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatIconModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css',
})
export class SearchBarComponent {
  @Input() searchType = '';
  searchTerm = '';
  resultsLength = 0;
  searchResults: Poem[] = [];

  constructor(
    private poemsService: PoemsService,
    private poemsListService: PoemsListService
  ) {}

  clearSearch() {
    this.searchTerm = '';
  }

  searchPoems(type: string, searchText: string) {
    if (!searchText) {
      return alert('No Search Term Entered');
    }

    this.poemsService.getPoemsList(type, searchText).subscribe((res: any) => {
      if (res.status === 404) {
        console.error(`No Matching ${this.searchType}s:`, res);
        alert(`No Matching ${this.searchType}s Found`);
      } else if (res.status) {
        console.error(`Error Fetching ${this.searchType}s:`, res);
        alert(res.reason);
      } else {
        this.searchResults = res;
        this.poemsListService.updatePoemsList(this.searchResults);
      }
    });

    this.clearSearch();
  }
}
