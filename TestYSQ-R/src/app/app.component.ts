import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {MatRadioModule} from '@angular/material/radio';
import { FormControl, FormGroup } from '@angular/forms';
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
  statementsGroup:FormGroup = new FormGroup({});
  score = new FormControl<number>(0);
  scoreText = new FormControl<number|null>(null);
  problemStatements = ["テスト１","テスト２","テスト３","テスト４"]

  public getScore(){
    var totaling = 0;
    this.problemStatements.forEach((statment,index) =>{
      totaling += +this.statementsGroup.get("score_"+index)?.value
    }
    )
    this.scoreText.setValue(totaling);
  }

  public ngOnInit(){
    this.problemStatements.forEach((statment,index) =>{
      this.statementsGroup.addControl("score_"+index,new FormControl<number>(0))
    }
    )
  }
}
