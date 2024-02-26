import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatRadioModule } from '@angular/material/radio';
import { FormControl, FormGroup } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { ProblemStatement } from './interface/problem-statement';
import { YsqrProblemStatements } from './const/ysqrProblemStatement';
import { ProblemAverageScore } from './interface/ploblem-average-score';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatRadioModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    ReactiveFormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
  statementsGroup: FormGroup = new FormGroup({});
  score = new FormControl<number>(0);
  scoreText = new FormControl<number | null>(null);
  problemStatements: ProblemStatement[] = YsqrProblemStatements;
  problemAverageScores: ProblemAverageScore[] = [];
  tableDataSorce: MatTableDataSource<ProblemAverageScore> =
    new MatTableDataSource<ProblemAverageScore>();
  notAnswereds: string[] = [];
  displayedColumns: string[] = ['blockTitele', 'average'];

  public getScore() {
    this.problemAverageScores = [];
    this.notAnswereds = [];
    // 問題毎に、合計を計算
    this.problemStatements.forEach((problem) => {
      var totaling = 0;
      problem.problemStatement.forEach((_, index) => {
        var score = +this.statementsGroup.get('score_' + problem.blockTitele + '_' + index)?.value;
        if (score == 0) {
          this.notAnswereds.push(problem.blockTitele + 'のNo.' + (index + 1) + 'が未回答です。');
        }
        totaling += score;
      });
      var average = totaling / problem.problemStatement.length;
      const scoreData: ProblemAverageScore = {
        blockTitele: problem.blockTitele,
        average: average,
      };
      this.problemAverageScores.push(scoreData);
    });
    // ここキモいから直したい。
    if (!this.notAnswereds.length) {
      this.tableDataSorce = new MatTableDataSource<ProblemAverageScore>(
        this.problemAverageScores.sort((a, b) => b.average - a.average)
      );
    }
  }

  public ngOnInit() {
    this.problemStatements.forEach((problem) => {
      problem.problemStatement.forEach((_, index) => {
        this.statementsGroup.addControl(
          'score_' + problem.blockTitele + '_' + index,
          new FormControl<number>(0, { nonNullable: true })
        ); //,validators:[Validators.required]これをつけて、ラジオボタンを入力しても、validで必ずTrueが返ってしまう。
      });
    });
  }
}
