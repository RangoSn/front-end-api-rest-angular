import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CuentaRegistrationService {

  constructor(private http:HttpClient) { }

  public saveCuenta(cuenta:any): Observable<any>{
    return this.http.post("http://localhost:8080/cuentas", cuenta);
  }
  public getAllCuentas(){
    return this.http.get("http://localhost:8080/cuentas");
  }
  public doRegistration(cuenta){
    return this.http.post("http://localhost:8080/cuentas", cuenta, {responseType: 'text' as 'json'});
  }
  public deleteCuenta(id){
    return this.http.delete("http://localhost:8080/cuentas/"+id);
  }

  
}
