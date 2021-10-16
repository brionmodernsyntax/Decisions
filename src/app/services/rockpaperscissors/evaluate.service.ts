import { Injectable, Input } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EvaluateService {

  constructor() { }
  private _result: string = "";
  private _score: number = 0;
  private _cpuValue: number = 0;
  private _playerValue: number = 0;

  public setResult(){
    this._cpuValue = Math.floor(Math.random() * 3);
    switch(this._playerValue){
      case 0:
        if(this._cpuValue == 0){
          this._result = "Tie";
        }else if(this._cpuValue == 1){
          this._result = "You Lose!";
        } else if(this._cpuValue == 2){
          this._result = "You Win!";
          this.score++;
        }
        break;
        case 1:
        if(this._cpuValue == 0){
          this._result = "You Win!";
          this.score++;
        }else if(this._cpuValue == 1){
          this._result = "Tie";
        } else if(this._cpuValue == 2){
          this._result = "You Lose!";
        }
        break;
        case 2:
        if(this._cpuValue == 0){
          this._result = "You Lose!";
        }else if(this._cpuValue == 1){
          this._result = "You Win!";
          this.score++;
        } else if(this._cpuValue == 2){
          this._result = "Tie";
        }
        break;
    }
  }

  public set playerValue(value: number){
    this._playerValue = value;
  }

  public set score(value: number) {
    this._score = value;
  }

  public get result(){
    return this._result;
  }

  public get playerValue(): number {
    return this._playerValue;
  }

  public get score(): number {
    return this._score;
  }





}
