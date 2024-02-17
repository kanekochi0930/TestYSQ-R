import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {MatRadioModule} from '@angular/material/radio';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatTable, MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { ProblemStatement } from './interface/problem-statement';
import { YsqrProblemStatements } from './const/ysqrProblemStatement';
import { ProblemTotalingScore } from './interface/ploblem-totaling-score';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,MatRadioModule,MatButtonModule,MatInputModule,MatFormFieldModule,MatTableModule,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  
  statementsGroup:FormGroup = new FormGroup({});
  score = new FormControl<number>(0);
  scoreText = new FormControl<number|null>(null);
  problemStatements:ProblemStatement[] = YsqrProblemStatements;
  problemTotalingScores:ProblemTotalingScore[] =[];
  tableDataSorce:MatTableDataSource<ProblemTotalingScore>= new MatTableDataSource<ProblemTotalingScore>;
  notAnswereds:string[]=[];
  displayedColumns: string[] = ['blockTitele', 'totaling'];
  
  public getScore(){
    this.problemTotalingScores= [];
    this.notAnswereds=[];
    // 問題毎に、合計を計算
    this.problemStatements.forEach((problem) =>{
      var totaling = 0;
      problem.problemStatement.forEach((_,index)=>{
        var score = +this.statementsGroup.get("score_"+problem.blockTitele+"_"+index)?.value
        if(score == 0){
          this.notAnswereds.push(problem.blockTitele+'のNo.'+(index+1)+'が未回答です。')
        }
        totaling += score
      })
      const scoreData :ProblemTotalingScore ={ blockTitele:problem.blockTitele , totaling:totaling}
      this.problemTotalingScores.push(scoreData)
    })
    // ここキモいから直したい。
    if(!this.notAnswereds){
      this.tableDataSorce = new MatTableDataSource<ProblemTotalingScore>(this.problemTotalingScores.sort((a,b) => b.totaling-a.totaling))
    }
  }

  public ngOnInit(){
    this.problemStatements.forEach((problem) =>{
      problem.problemStatement.forEach((_,index)=>{
      this.statementsGroup.addControl(
        "score_"+problem.blockTitele+"_"+index,
        new FormControl<number>(0,{nonNullable:true}))//,validators:[Validators.required]これをつけて、ラジオボタンを入力しても、validで必ずTrueが返ってしまう。
      })
    })
  }
}
