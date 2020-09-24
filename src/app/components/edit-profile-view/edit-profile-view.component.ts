import {Component, HostBinding, HostListener, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {WordsValidator} from "../../Utils/WordsValidators";
import validate = WebAssembly.validate;

@Component({
  selector: 'app-edit-profile-view',
  templateUrl: './edit-profile-view.component.html',
  styleUrls: ['./edit-profile-view.component.css']
})
export class EditProfileViewComponent implements OnInit {
  alert=alert;
  console=console;
  _color;
  @Input() set color(value){
    this._color =value;
    this.isBlue = value === 'blue';
  };
  @Input() borderRadius;
  @HostBinding('class.isBlue') isBlue;
  @HostListener('click', ['17']) onClick(param){
    console.log(param, 'param');
    alert('host click')
  }
  // nameControl = new FormControl('');
  formGroup = new FormGroup({
    name: new FormControl('',[WordsValidator("boris",1)]),
    age: new FormControl(0, [Validators.min(18), Validators.max(65)]),
    address: new FormGroup(
      {
        street: new FormControl('', [Validators.required,Validators.minLength(2)]),
        city: new FormControl ('',[Validators.required,Validators.minLength(2)])

      })
  });

  // model={
  //   name:'',
  //   age: 0
  // };
  constructor() {
    window['editProfileViewComponent']=this

  }

  ngOnInit(): void {
    this
      .formGroup
      .valueChanges
      .subscribe(value => {
      console.log(value, 'value changes');
      if (this.formGroup.controls.name.errors){
        console.log(this.formGroup.controls.name.errors, 'this.formGroup.controls.name.errors');
      }
    })
  }
  onSave(){
    console.log('Saving Model');
    console.log(this.formGroup.value,'Model')
  }

}
