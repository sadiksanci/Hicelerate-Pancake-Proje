import { Component, Inject, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TableService } from 'src/app/services/table.service';
import { bilgiler } from 'src/bilgiler';
import {MatDialog,MatDialogModule,MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DuzenleComponent } from '../duzenle/duzenle.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ɵCssKeyframesDriver } from '@angular/animations/browser';
import { kStringMaxLength } from 'buffer';
import { element } from 'protractor';
import { Console } from 'console';

export interface DialogData {
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})
export class HomeComponent implements OnInit {
  
 ReadMore:boolean=true;
  
  constructor(private services:TableService ,public   dialog: MatDialog) { }
  public _ELEMENT_DATA: bilgiler[];
  public get ELEMENT_DATA(): bilgiler[] {
    return this._ELEMENT_DATA;
  }
  public set ELEMENT_DATA(value: bilgiler[]) {
    this._ELEMENT_DATA = value;
  }
  displayedColumns: string[] = ['businessId', 'businessName', 'title','pictureUrl', 'sessionDate','listPrice','discountedPrice','katilimci','description','actions'];
  dataSource = new MatTableDataSource<bilgiler>(this.ELEMENT_DATA);

  ngOnInit(): void {
    this.getAllReports();
    
  }
   getAllReports(){
    let resp=this.services.kurstablo();  
    resp.subscribe(report=>this.dataSource.data=report as bilgiler[]);

    console.debug ("resp: \ n" + resp);
    
  }  
  openDialog(kursad:bilgiler){
    this.services.formdata=kursad;
    const dialogRef = this.dialog.open(DuzenleComponent, {
      width: '650px',
      height:'500px',
    });
            
  }

  toogleActive(kursad: bilgiler) {
    console.log('toogleActive');
    for(let index = 0; index < this.ELEMENT_DATA.length; index++) {
      if(this.ELEMENT_DATA[index].businessId == kursad.businessId) {
        this.ELEMENT_DATA[index].active = this.ELEMENT_DATA[index].active;
      }
    }
  }


  durum(durum:bilgiler){
   this.services.formdata=durum;
  this.ReadMore=!this.ReadMore;
 }


}
