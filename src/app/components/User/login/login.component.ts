import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, Validators,FormControl, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  formulario: FormGroup= new FormGroup({});
  fieldTextType: boolean= false;
  
  constructor(){}
  ngOnInit(): void {
    this.formulario= new FormGroup({
      username: new FormControl('',[Validators.required,Validators.email,]),
      password: new FormControl('',[Validators.required,Validators.minLength(8)])
    })
  }

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

  ngOnSubmit() : void{
    if(this.formulario?.valid){
      console.log(this.formulario.value);
    }else{
      console.log('invalid form');
    }
  }

}
