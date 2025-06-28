import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ysqrEmsResultDescriptions } from '../../const/ysqrEmsResultDescriptions';

interface Result {
  blockTitele: string;
  description: string;
  name: string;
  improvement: string;
  average: number;
  isStrong: boolean;
}

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
  results: Result[] = [];
  readonly maxScore = 6; // Max score for a single question
  selectedBlockTitle: string | null = null;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.results = Object.keys(params).map((key) => {
        const average = parseFloat(params[key]);
        const descriptionData = ysqrEmsResultDescriptions.find(
          (desc) => desc.blockTitle === key
        );
        return {
          blockTitele: key,
          description: descriptionData?.description || '説明がありません',
          name: descriptionData?.name || '不明なスキーマ',
          improvement: descriptionData?.improvement || '改善アイデアがありません',
          average: average,
          isStrong: average >= 4,
        };
      });
      // Sort results by average score in descending order
      this.results.sort((a, b) => b.average - a.average);
    });
  }

  toggleDetails(blockTitle: string) {
    this.selectedBlockTitle =
      this.selectedBlockTitle === blockTitle ? null : blockTitle;
  }

  retakeTest() {
    this.router.navigate(['/']);
  }
}