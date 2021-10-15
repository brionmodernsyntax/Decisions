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
    switch(this._cpuValue){
      case 0:
        if(this._playerValue == 0){
          this._result = "Tie";
        }else if(this._playerValue == 1){
          this._result = "You Win!";
          this.score++;
        } else if(this._playerValue == 2){
          this._result = "You Lose!";
        }
        break;
        case 1:
        if(this._playerValue == 0){
          this._result = "You Lose!";
        }else if(this._playerValue == 1){
          this._result = "Tie";
        } else if(this._playerValue == 2){
          this._result = "You Win!";
          this.score++;
        }
        break;
        case 2:
        if(this._playerValue == 1){
          this._result = "You Win!";
          this.score++;
        }else if(this._playerValue == 0){
          this._result = "You Lose!";
        } else if(this._playerValue == 2){
          this._result = "Tie";
        }
        break;
    }
  }

  public set cpuValue(value: number){
    this._cpuValue = value;
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

  public get cpuValue(): number {
    return this._cpuValue;
  }

  public get playerValue(): number {
    return this._playerValue;
  }

  public get score(): number {
    return this._score;
  }





}
