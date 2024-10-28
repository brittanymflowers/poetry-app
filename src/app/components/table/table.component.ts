import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Poem } from '../../interfaces/poem.interface';
import { PoemDialogComponent } from '../poem-dialog/poem-dialog.component';
import { PoemsListService } from '../../services/poems-list.service';
import { SelectedPoemService } from '../../services/selected-poem.service';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent implements OnInit {
  constructor(
    private poemsListService: PoemsListService,
    private selectedPoemService: SelectedPoemService
  ) {}

  poems: Poem[] = [];
  dataSource: MatTableDataSource<Poem> = new MatTableDataSource<Poem>(
    this.poems
  );
  columnsToDisplay: string[] = ['Author', 'Title', 'LineCount'];
  readonly dialog = inject(MatDialog);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  handleClick(poem: Poem) {
    this.selectedPoemService.updateSelectedPoem(poem);
    this.dialog.open(PoemDialogComponent);
  }

  ngOnInit(): void {
    this.poemsListService.poemsList$.subscribe((poemsList) => {
      this.dataSource.data = poemsList;
      this.dataSource.paginator = this.paginator;
    });
  }
}
