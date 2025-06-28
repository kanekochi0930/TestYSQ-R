import { Routes } from '@angular/router';
import { ProblemListComponent } from './component/problem-list/problem-list.component';
import { ProblemResultComponent } from './page/problem-result/problem-result.component';

export const routes: Routes = [
  { path: '', component: ProblemListComponent },
  {
    path: 'result',
    component: ProblemResultComponent,
  },
];
