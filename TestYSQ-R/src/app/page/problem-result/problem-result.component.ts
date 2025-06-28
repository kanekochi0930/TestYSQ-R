import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ProblemAverageScore } from '../../interface/problem-average-score';

@Component({
  selector: 'app-problem-result',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatProgressBarModule,
  ],
  templateUrl: './problem-result.component.html',
  styleUrl: './problem-result.component.scss',
})
export class ProblemResultComponent implements OnInit {
  results: ProblemAverageScore[] = [];
  readonly maxScore = 6; // Max score for a single question

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.results = Object.keys(params).map((key) => ({
        blockTitele: key,
        average: parseFloat(params[key]),
      }));
      // Sort results by average score in descending order
      this.results.sort((a, b) => b.average - a.average);
    });
  }

  retakeTest() {
    this.router.navigate(['/']);
  }
}