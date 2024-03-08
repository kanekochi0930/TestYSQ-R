import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
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

  public getAverageScore() {
    this.notAnswereds = [];
    const problemAverageScoreUrlQuery: ProblemAverageScoreUrlQuery = {};
    if (this.statementsGroup.invalid) {
      return;
    }
    this.problemStatements.forEach((problem) => {
      var totaling = 0;
      problem.problemStatement.forEach((_, index) => {
        var control = this.statementsGroup.get('score_' + problem.blockTitele + '_' + index);
        totaling += +control?.value;
      });
      var average = totaling / problem.problemStatement.length;
      problemAverageScoreUrlQuery[problem.blockTitele] = Math.round(average * 10) / 10;
    });
    this.router.navigate(['/result'], { queryParams: problemAverageScoreUrlQuery });
  }

  public ngOnInit() {
    this.problemStatements.forEach((problem) => {
      problem.problemStatement.forEach((_, index) => {
        this.statementsGroup.addControl(
          'score_' + problem.blockTitele + '_' + index,
          new FormControl<number | null>(null, { validators: [Validators.required] })
        );
      });
    });
  }
}
