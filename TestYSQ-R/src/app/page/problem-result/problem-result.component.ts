import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';

interface Result {
  blockTitele: string;
  description: string;
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

  private readonly schemaDescriptions: { [key: string]: string } = {
    ED: '愛情剥奪スキーマ',
    AB: '見捨てられスキーマ',
    MA: '不信・虐待スキーマ',
    SI: '孤立スキーマ',
    DS: '欠陥・恥スキーマ',
    FA: '失敗スキーマ',
    DI: '無能・依存スキーマ',
    VH: 'すべてが怖いスキーマ',
    EM: '巻き込まれスキーマ',
    SS: '自己犠牲スキーマ',
    FLC: '自己規制の失敗スキーマ',
    EC: '感情抑制スキーマ',
    US: '完璧主義スキーマ',
    ET: '俺様スキーマ',
    IS: 'コントロール不可能スキーマ',
    NP: 'ネガティブ注意スキーマ',
    PUS: '罰するべきスキーマ（自分）',
    PUO: '罰するべきスキーマ（他人）',
  };

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.results = Object.keys(params).map((key) => {
        const average = parseFloat(params[key]);
        return {
          blockTitele: key,
          description: this.schemaDescriptions[key] || '説明がありません',
          average: average,
          isStrong: average >= 4,
        };
      });
      // Sort results by average score in descending order
      this.results.sort((a, b) => b.average - a.average);
    });
  }

  retakeTest() {
    this.router.navigate(['/']);
  }
}