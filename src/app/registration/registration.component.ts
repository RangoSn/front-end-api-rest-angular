import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CuentaRegistrationService } from '../cuenta-registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  cuentaForm: FormGroup;
  cuenta: any;
  constructor(public fb: FormBuilder,  public service:CuentaRegistrationService) { }

  ngOnInit(): void {
    this.cuentaForm = this.fb.group({
      id: ['', Validators.required],
      clave: ['', Validators.required],
    })
    this.service.getAllCuentas().subscribe(resp=> {
      this.cuenta = resp;
      console.log(this.cuenta);
      
    }, 
    error => {console.error(error)}
    );
  }

  guardar():void{
    this.service.saveCuenta(this.cuentaForm.value).subscribe(resp=> {
      this.cuentaForm.reset();
      this.cuenta = this.cuenta.filter(cuenta => resp.id != cuenta.id)
      this.cuenta.push(resp);
    }, 
    error => {console.error(error)}
    );
  }
  eliminar(cuenta){
    this.service.deleteCuenta(cuenta.id).subscribe(resp=> {
      window.location.reload();   
    }, 
    error => {console.error(error)}
    );
  }
  editar(cuenta){
    this.cuentaForm.setValue({
      id: cuenta.id,
      clave: cuenta.clave,
    })
  }
}
