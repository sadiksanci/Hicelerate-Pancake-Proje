import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DuzenleComponent } from './component/duzenle/duzenle.component';
import { HomeComponent } from './component/home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: '', component: DuzenleComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
