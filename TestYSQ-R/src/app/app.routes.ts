import { Routes } from '@angular/router';
import { ProblemAnswerComponent } from './page/problem-answer/problem-answer.component';
import { ProblemResultComponent } from './page/problem-result/problem-result.component';

export const routes: Routes = [
  { path: 'question', component: ProblemAnswerComponent },
  {
    path: 'result',
    component: ProblemResultComponent,
  },
];
