import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class YsqrService {
  scores: number[] = [];
  constructor() {}

  public setScores(socores: number[]) {
    this.scores = socores;
  }
  public getScores(): number[] {
    return this.scores;
  }
}
