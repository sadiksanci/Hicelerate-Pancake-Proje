import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { bilgiler } from 'src/bilgiler';


@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(private http:HttpClient) { }

  formdata: bilgiler;


   kurstablo(){
    
   return this.http.get('https://api.zaguru.com/api/Classes/getClasses');

  } 
  ekletablo(obj){
    return this.http.post('https://api.zaguru.com/api/Classes/getClasses',obj)
  }
  updatekurstablo(kurs:bilgiler){
    return this.http.put('https://api.zaguru.com/api/Classes/getClasses',kurs);
  }
 removekurstablo(id){
return this.http.delete("https://api.zaguru.com/api/Classes/getClasses/",id);

 }

}

