import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormBuilder } from '@angular/forms';



@Component({
  selector: 'lib-demo-config-configuration',
  templateUrl: './demo-config-configuration.component.html',
  styleUrls: ['./demo-config-configuration.component.scss']
})
export class DemoConfigConfigurationComponent implements OnInit {

   registerForm: FormGroup;
  submitted = false; 

 checkedUn = false;
 checkedDeux = false;
 checkedTrois = false;
 checkedQuatre = false;
 checkedCinq = false;
 checkedSix = false;
 checkedSept = false;
 checkedHuit = false;
 checkedNeuf = false;

 

 
 constructor(private formBuilder: FormBuilder) { }

 ngOnInit() {
     this.registerForm = this.formBuilder.group({
         plset: [''],
         mtm : [''],
        riskclasses : [''],
        confidencelevel : [''],
        decayfactor : [''],
        vartype : [''],
        tailmethod : [''],
        riskfactorseffect : [''],
        sensitivityset : ['']
     } 
     );
 }

 onSubmit() {
  this.submitted = true;}

  onReset() {
    this.submitted = false;
    this.checkedUn = false;
    this.checkedDeux = false;
    this.checkedTrois = false;
    this.checkedQuatre = false;
    this.checkedCinq = false;
    this.checkedSix = false;
    this.checkedSept = false;
    this.checkedHuit = false;
    this.checkedNeuf = false;
    this.registerForm.reset();
}

 
 /*toggleVisibilityUn(e){
 this.checkedUn= e.target.checked;
 } */
 toggleVisibilityUn(){
   if(this.checkedUn === false){
  this.checkedUn = true;
   }
   else{
     this.checkedUn = false;
   }
  } 
 toggleVisibilityDeux(){
  if(this.checkedDeux === false){
    this.checkedDeux = true;
     }
     else{
       this.checkedDeux = false;
     }
  }

toggleVisibilityTrois(){
  if(this.checkedTrois === false){
    this.checkedTrois = true;
    }
    else{
      this.checkedTrois = false;
    }
  }
  


toggleVisibilityQuatre(){
  if(this.checkedQuatre === false){
    this.checkedQuatre = true;
      }
      else{
        this.checkedQuatre = false;
      }
  }

toggleVisibilityCinq(){
  if(this.checkedCinq === false){
    this.checkedCinq = true;
      }
      else{
        this.checkedCinq = false;
      }
  }
toggleVisibilitySix(){
  if(this.checkedSix === false){
    this.checkedSix = true;
      }
      else{
        this.checkedSix = false;
      }
  }
toggleVisibilitySept(){
  if(this.checkedSept === false){
    this.checkedSept = true;
      }
      else{
        this.checkedSept = false;
      }
  }
  toggleVisibilityHuit(){
    if(this.checkedHuit === false){
      this.checkedHuit = true;
        }
        else{
          this.checkedHuit = false;
        }
    }
    toggleVisibilityNeuf(){
      if(this.checkedNeuf === false){
        this.checkedNeuf = true;
          }
          else{
            this.checkedNeuf = false;
          }
      }
}
