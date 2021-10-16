import { Component, OnInit } from '@angular/core';
import { EvaluateService } from 'src/app/services/rockpaperscissors/evaluate.service';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {

  constructor(public evaluate:EvaluateService) { }
  ngOnInit(): void {
  }

  evaluateRock() {
    this.evaluate.playerValue = 0;
    this.evaluate.setResult();
  }
  evaluatePaper() {
    this.evaluate.playerValue = 1;
    this.evaluate.setResult();
  }
  evaluateScissors() {
    this.evaluate.playerValue = 2;
    this.evaluate.setResult();
  }
  
}
