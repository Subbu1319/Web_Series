import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private client:HttpClient)
  {

  }
  
  getAllweb_series(){
    return this.client.get<any>("http://localhost:3000/series").pipe(
      map((response:any)=>{
        return response;
      }
    )
    
  );
  }

  postweb_series(data:any){
    return this.client.post<any>("http://localhost:3000/series",data).pipe(
      map((response:any)=>{
        return response;
      }
    )
    
  );
  }

  deleteweb_series(data:number){
    return this.client.delete<any>("http://localhost:3000/Series/"+data).pipe(
      map((response:any)=>{
        return response;
      }
    )
    
  );
  }

  updateweb_series(data:any,id:number){
    return this.client.put<any>("http://localhost:3000/Series/"+id,data).pipe(
      map((response:any)=>{
        return response;
      }
    )
    
  );
  }

}
