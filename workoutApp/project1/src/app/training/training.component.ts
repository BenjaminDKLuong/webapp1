import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { TrainingService } from './training.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit, OnDestroy {
  ongoingTraining: boolean = false;
  runningExercise: Subscription;

  constructor(private trainingService: TrainingService) { }

  ngOnInit() {
    this.runningExercise = this.trainingService.isRunning.subscribe(result => {
      this.ongoingTraining = result;
    })
  }

  ngOnDestroy(){
    this.runningExercise.unsubscribe();
  }
}
