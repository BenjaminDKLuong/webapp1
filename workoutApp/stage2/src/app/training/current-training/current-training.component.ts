import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { StopTrainingComponent } from './stop-training.component';
import { TrainingService } from '../training.service';



@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {
  
  progress = 0;
  timer: number;

  constructor(public dialog: MatDialog,private trainingService: TrainingService) { }

  ngOnInit() {
    this.startOrResumeTimer();
  }

  startOrResumeTimer(){
    const step = this.trainingService.getRunningExercise().duration/100*1000
    this.timer = setInterval(() => {
      this.progress = this.progress + 15;
      if (this.progress >= 100) {
        this.trainingService.completeExercise();
        clearInterval(this.timer);
        // this.trainingExit.emit();
      }
    }, step);
  }

  onStop() {
    clearInterval(this.timer);
    // this.trainingStop.emit();
    const dialogRef = this.dialog.open(StopTrainingComponent, {
      data: {
        progress: this.progress
      }
    })
    dialogRef.afterClosed().subscribe(result => {
      // console.log(result);
      if (result) {
        this.trainingService.cancelExercise(this.progress);
      } else {
        this.startOrResumeTimer();
      }
    });
  }
}
