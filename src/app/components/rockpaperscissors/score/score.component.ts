import { Component, Input, OnInit } from '@angular/core';
import { EvaluateService } from 'src/app/services/rockpaperscissors/evaluate.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {

  constructor(public evaluate:EvaluateService) { }

  ngOnInit(): void {
   
  }

}
