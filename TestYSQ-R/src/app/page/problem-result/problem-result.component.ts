import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ProblemAverageScore } from '../../interface/ploblem-average-score';

@Component({
  selector: 'app-problem-result',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './problem-result.component.html',
  styleUrl: './problem-result.component.scss',
})
export class ProblemResultComponent {
  tableDataSorce: MatTableDataSource<ProblemAverageScore> =
    new MatTableDataSource<ProblemAverageScore>();
  displayedColumns: string[] = ['blockTitele', 'average'];
}
