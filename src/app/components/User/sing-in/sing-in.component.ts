  import { Component, ElementRef, ViewChild } from '@angular/core';
  import { CommonModule } from '@angular/common';
  @Component({
    selector: 'app-sing-in',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './sing-in.component.html',
    styleUrl: './sing-in.component.css'
  })
  export class SingInComponent {

    fieldTextType: boolean= false;
   

    constructor(){

    }

    toggleFieldTextType() {
      this.fieldTextType = !this.fieldTextType;
    }
  
    
  }
