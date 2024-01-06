import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {MatRadioModule} from '@angular/material/radio';
import { FormControl } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,MatRadioModule,MatButtonModule,MatInputModule,MatFormFieldModule,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  title = 'TestYSQ-R';
  score :  FormControl = new FormControl<number>(0);
  scoreText:FormControl = new FormControl<number|null>(1111);

  public getScore(){
    this.scoreText.setValue(this.score.value)
  }
}
