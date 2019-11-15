import { Component, OnInit } from '@angular/core';
import { TrainingService } from '../training.service';
import { Exercise } from '../exercise.model';
import { NgForm } from '@angular/forms';

import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {

  // exercises: Exercise[] = [];
  // exercises : Observable<any>;
  exercises: Observable<any>;

  constructor(private trainingService: TrainingService, private db: AngularFirestore) { }

  ngOnInit() {
    // this.exercises = this.trainingService.getAvailableExercises();
    // availableExercises is name in firebase
    this.exercises = this.db
      .collection('availableExercises')
      .snapshotChanges()
      .pipe(map(resultt => {
        return resultt.map(doc => {
          return {
            id: doc.payload.doc.id,
            ...doc.payload.doc.data(),
            // duration: doc.payload.doc.data().duration,
            // calories: doc.payload.doc.data().calories,
          }
        })
      }))
  }

  onStartTraining(form: NgForm) {
    this.trainingService.startExercise(form.value.exercise);
  }
}
