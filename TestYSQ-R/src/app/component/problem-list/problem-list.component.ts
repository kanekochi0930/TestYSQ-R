import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { YsqrProblemStatements } from '../../const/ysqrProblemStatement';
import { ProblemAverageScore } from '../../interface/ploblem-average-score';
import { ProblemStatement } from '../../interface/problem-statement';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-problem-list',
  standalone: true,
  imports: [CommonModule, MatRadioModule, MatFormFieldModule, ReactiveFormsModule],
  templateUrl: './problem-list.component.html',
  styleUrl: './problem-list.component.scss',
})
export class ProblemListComponent {
  statementsGroup: FormGroup = new FormGroup({});
  score = new FormControl<number>(0);
  scoreText = new FormControl<number | null>(null);
  problemStatements: ProblemStatement[] = YsqrProblemStatements;
  problemAverageScores: ProblemAverageScore[] = [];
  notAnswereds: string[] = [];

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
    // if (!this.notAnswereds.length) {
    //   this.tableDataSorce = new MatTableDataSource<ProblemAverageScore>(
    //     this.problemAverageScores.sort((a, b) => b.average - a.average)
    //   );
    // }
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
