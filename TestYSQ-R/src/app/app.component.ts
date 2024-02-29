import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { ProblemListComponent } from './component/problem-list/problem-list.component';
import { ProblemResultComponent } from './component/problem-result/problem-result.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProblemListComponent, ProblemResultComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {}
