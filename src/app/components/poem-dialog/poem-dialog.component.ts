import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { SelectedPoemService } from '../../services/selected-poem.service';
import { Poem } from '../../interfaces/poem.interface';

@Component({
  selector: 'app-poem-dialog',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle,
    NgFor,
  ],
  templateUrl: './poem-dialog.component.html',
  styleUrl: './poem-dialog.component.css',
})
export class PoemDialogComponent {
  constructor(private selectedPoemService: SelectedPoemService) {}
  poem: Poem = {} as Poem;

  ngOnInit(): void {
    this.selectedPoemService.selectedPoem$.subscribe((selectedPoem) => {
      this.poem = selectedPoem;
    });
  }
}
