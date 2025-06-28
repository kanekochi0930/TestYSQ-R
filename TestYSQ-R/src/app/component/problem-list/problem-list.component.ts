import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { YsqrProblemStatements } from '../../const/ysqrProblemStatement';
import { ProblemStatement } from '../../interface/problem-statement';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { YsqrService } from '../../service/ysqr.service';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ProblemAverageScoreQuery } from '../../interface/problem-average-score';

interface FlatProblem {
  blockTitele: string;
  problemStatement: string;
  formControlName: string;
}

@Component({
  selector: 'app-problem-list',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatCardModule,
    MatButtonModule,
    MatProgressBarModule,
  ],
  templateUrl: './problem-list.component.html',
  styleUrl: './problem-list.component.scss',
})
export class ProblemListComponent implements OnInit {
  statementsGroup: FormGroup = new FormGroup({});
  problemStatements: ProblemStatement[] = YsqrProblemStatements;
  flatProblems: FlatProblem[] = [];
  currentIndex = 0;
  private readonly answersKey = 'ysqr_answers';
  private readonly indexKey = 'ysqr_currentIndex';

  constructor(private router: Router, private ysqrService: YsqrService) {}

  ngOnInit() {
    this.problemStatements.forEach((problemBlock) => {
      problemBlock.problemStatement.forEach((statement, index) => {
        const controlName = `score_${problemBlock.blockTitele}_${index}`;
        this.flatProblems.push({
          blockTitele: problemBlock.blockTitele,
          problemStatement: statement,
          formControlName: controlName,
        });
        this.statementsGroup.addControl(
          controlName,
          new FormControl<number | null>(null, Validators.required)
        );
      });
    });

    this.loadState();

    this.statementsGroup.valueChanges.subscribe((values) => {
      localStorage.setItem(this.answersKey, JSON.stringify(values));
    });
  }

  private loadState() {
    const savedAnswers = localStorage.getItem(this.answersKey);
    if (savedAnswers) {
      this.statementsGroup.patchValue(JSON.parse(savedAnswers));
    }

    const savedIndex = localStorage.getItem(this.indexKey);
    if (savedIndex) {
      this.currentIndex = parseInt(savedIndex, 10);
    }
  }

  private saveCurrentIndex() {
    localStorage.setItem(this.indexKey, this.currentIndex.toString());
  }

  onSelectionChange() {
    setTimeout(() => {
      if (this.currentIndex < this.flatProblems.length - 1) {
        this.currentIndex++;
        this.saveCurrentIndex();
      }
    }, 200);
  }

  nextQuestion() {
    if (this.currentIndex < this.flatProblems.length - 1) {
      this.currentIndex++;
      this.saveCurrentIndex();
    }
  }

  previousQuestion() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.saveCurrentIndex();
    }
  }

  get progress() {
    const answeredCount = Object.values(this.statementsGroup.controls).filter(
      (control) => control.valid
    ).length;
    return (answeredCount / this.flatProblems.length) * 100;
  }

  finish() {
    if (this.statementsGroup.invalid) {
      this.statementsGroup.markAllAsTouched();
      return;
    }

    const scoresByBlock: { [key: string]: number[] } = {};

    this.flatProblems.forEach((problem) => {
      if (!scoresByBlock[problem.blockTitele]) {
        scoresByBlock[problem.blockTitele] = [];
      }
      const score = this.statementsGroup.get(problem.formControlName)?.value;
      scoresByBlock[problem.blockTitele].push(parseInt(score, 10));
    });

    const problemAverageScoreUrlQuery: ProblemAverageScoreQuery = {};
    for (const block in scoresByBlock) {
      const scores = scoresByBlock[block];
      const total = scores.reduce((sum, current) => sum + current, 0);
      const average = total / scores.length;
      problemAverageScoreUrlQuery[block] = Math.round(average * 10) / 10;
    }

    const allScores = Object.values(this.statementsGroup.value) as number[];
    this.ysqrService.setScores(allScores);

    localStorage.removeItem(this.answersKey);
    localStorage.removeItem(this.indexKey);

    this.router.navigate(['/result'], {
      queryParams: problemAverageScoreUrlQuery,
    });
  }
}