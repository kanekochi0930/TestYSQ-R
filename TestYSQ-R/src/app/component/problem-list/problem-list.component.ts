import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { YsqrProblemStatements } from '../../const/ysqrProblemStatement';
import { ProblemAverageScoreQuery as ProblemAverageScoreUrlQuery } from '../../interface/ploblem-average-score';
import { ProblemStatement } from '../../interface/problem-statement';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-problem-list',
  standalone: true,
  imports: [CommonModule, MatRadioModule, MatFormFieldModule, ReactiveFormsModule],
  templateUrl: './problem-list.component.html',
  styleUrl: './problem-list.component.scss',
})
export class ProblemListComponent {
  statementsGroup: FormGroup = new FormGroup({});
  problemStatements: ProblemStatement[] = YsqrProblemStatements;
  notAnswereds: string[] = [];

  constructor(private router: Router) {}

  public getScore() {
    this.notAnswereds = [];
    const problemAverageScoreUrlQuery: ProblemAverageScoreUrlQuery = {};
    // 問題毎に、平均を計算しクエリパラメータに設定し遷移。
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
      problemAverageScoreUrlQuery[problem.blockTitele] = average;
    });
    // ここキモいから直したい。
    // if (!this.notAnswereds.length) {
    //   this.tableDataSorce = new MatTableDataSource<ProblemAverageScore>(
    //     this.problemAverageScores.sort((a, b) => b.average - a.average)
    //   );
    // }

    this.router.navigate(['/result'], { queryParams: problemAverageScoreUrlQuery });
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
