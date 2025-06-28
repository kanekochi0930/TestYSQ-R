import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ProblemAverageScore } from '../../interface/problem-average-score';
import { YsqrProblemStatements } from '../../const/ysqrProblemStatement';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    YsqrProblemStatements.forEach((problem) => {
      var average = 0;
      this.route.queryParams.subscribe((params) => {
        average = params[problem.blockTitele];
      });
      this.tableDataSorce.data.push({ blockTitele: problem.blockTitele, average: average });
    });
    this.tableDataSorce.data.sort((a, b) => b.average - a.average);
  }
}
