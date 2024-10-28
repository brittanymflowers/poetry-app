import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TableComponent } from './components/table/table.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SearchBarComponent, TableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'poetry-app';
  searchTypeAuthor = 'Author';
  searchTypeTitle = 'Title';
}
