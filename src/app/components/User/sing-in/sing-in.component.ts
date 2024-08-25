  import { Component, OnInit } from '@angular/core';
  import { CommonModule } from '@angular/common';
import { FormGroup ,FormControl,Validators, ReactiveFormsModule} from '@angular/forms';
  @Component({
    selector: 'app-sing-in',
    standalone: true,
    imports: [CommonModule,ReactiveFormsModule],
    templateUrl: './sing-in.component.html',
    styleUrl: './sing-in.component.css'
  })
  export class SingInComponent implements OnInit {

    formulario:FormGroup= new FormGroup({});
    fieldTextType: boolean= false;
   
    ngOnInit(): void {
        this.formulario=new FormGroup({
          username: new FormControl('',[ Validators.required,Validators.email]),
          password: new FormControl('',[ Validators.required,Validators.minLength(8)]),
        })
    }

    constructor(){

    }

    toggleFieldTextType() {
      this.fieldTextType = !this.fieldTextType;
    }
  
    
  }
