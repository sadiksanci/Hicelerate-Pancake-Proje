import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog,MatDialogModule, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { TableService } from 'src/app/services/table.service';
import { bilgiler } from 'src/bilgiler';
import { DialogData, HomeComponent } from '../home/home.component';
import {NgForm} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@Component({
  selector: 'app-duzenle',
  templateUrl: './duzenle.component.html',
  styleUrls: ['./duzenle.component.css']
})
export class DuzenleComponent  {
 
  
 

  constructor(public services:TableService ,
    public dialogRef: MatDialogRef<HomeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
   ){

  }
  

  ngOnInit(): void {

 
 }
  
 
  onNoClick(): void {
    this.dialogRef.close();
  }
  onSubmit(form:NgForm)
  {
      this.services.updatekurstablo(form.value).subscribe(res=>{
        
        
      })

  }

 
 
 

  }
  



