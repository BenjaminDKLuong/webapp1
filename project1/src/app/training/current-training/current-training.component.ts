import { Component, OnInit, EventEmitter, Output, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { StopTrainingComponent } from './stop-training.component';



@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {
  @Output() trainingStop = new EventEmitter<void>();
  progress = 0;
  timer: number;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.timer = setInterval(() => {
      this.progress = this.progress + 5;
      if (this.progress >= 100) {
        clearInterval(this.timer);
        // this.trainingStop.emit();
      }
    }, 1000);
  }

  onStop() {
    clearInterval(this.timer);
    // this.trainingStop.emit();
    this.dialog.open(StopTrainingComponent, { 
      data:{
        progress: this.progress
    }})
  }

  // onStop(): void {
  //   clearInterval(this.timer);
  //   const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
  //     width: '250px',
  //     data: { name: this.name, animal: this.animal }
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //     this.animal = result;
  //   });
  // }
}
