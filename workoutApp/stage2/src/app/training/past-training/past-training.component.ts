import { Component, OnInit, ViewChild, AfterContentInit, AfterViewInit } from '@angular/core';
import { TrainingService } from '../training.service';
import { Exercise } from '../exercise.model';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-past-training',
  templateUrl: './past-training.component.html',
  styleUrls: ['./past-training.component.css']
})
export class PastTrainingComponent implements OnInit, AfterViewInit {
  
  displayedColumns = ['date', 'name', 'duration', 'calories', 'state']
  dataSource = new MatTableDataSource<Exercise>();
  // we can use another way
  // dataSource: Exercise[]=[];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private trainingService: TrainingService) {
    
  }

  ngOnInit() {
    this.dataSource.data = this.trainingService.getCompletedOrCancelledExercises();
    // we can use another way
    // this.dataSource = this.trainingService.getCompletedOrCancelledExercises();
  }

  // for sorting
  ngAfterViewInit(){
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
