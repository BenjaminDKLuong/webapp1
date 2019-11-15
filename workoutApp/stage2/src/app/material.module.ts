import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule, ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material';
import {
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatTabsModule,
    MatCardModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule
} from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule, MatIconModule, MatInputModule,
        MatFormFieldModule, MatDatepickerModule, MatNativeDateModule,
        MatCheckboxModule, MatSidenavModule, MatToolbarModule,
        MatListModule, MatTabsModule, MatCardModule,
        MatSelectModule, MatProgressSpinnerModule, MatDialogModule,
        MatTableModule, MatSortModule, MatPaginatorModule
    ],

    exports: [
        MatButtonModule, MatIconModule, MatInputModule,
        MatFormFieldModule, MatDatepickerModule, MatNativeDateModule,
        MatCheckboxModule, MatSidenavModule, MatToolbarModule,
        MatListModule, MatTabsModule, MatCardModule,
        MatSelectModule, MatProgressSpinnerModule, MatDialogModule,
        MatTableModule, MatSortModule, MatPaginatorModule
    ]
})

export class MaterialModule { }