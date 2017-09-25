import { Component,Output,EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormControl } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SubActivityModel } from '../../../../Models/SubActivityModel';
@Component({
  selector: 'sub-activity-form',
  templateUrl: './sub.activity.form.component.html'
})
export class SubActivityFormComponent{
  @Output() cancelSubActivityCreation = new EventEmitter();
  constructor(private fb: FormBuilder, public datepipe: DatePipe) { }
  subActivityForm: FormGroup;
  eventStartDateControl: FormControl;
  eventEndDateControl: FormControl;
  eventStartDateBind: string;
  eventEndDateBind: string;
  state: string;
  ngOnInit(): void {
    this.subActivityForm = this.fb.group({
      EventNameControl: ['', Validators.required],
      EventDescControl: ['', Validators.required]
      // ProjectStartDate:[null,Validators.required]
    });
    this.eventStartDateControl = new FormControl(null, [
      Validators.required])
    this.eventEndDateControl = new FormControl(null, [
      Validators.required])
  }

  showDialog = false;
  subActivityModel: SubActivityModel;
  onSubmit(formData: any) {
    this.subActivityModel = new SubActivityModel();
    this.subActivityModel.SubActivityName = formData._value.EventNameControl;
    this.subActivityModel.SubActivityDesc = formData._value.EventDescControl;
    this.subActivityModel.SelectedMainActivity = this.state;
    this.subActivityModel.SubActivityStartDate = this.datepipe.transform(this.eventStartDateBind, 'yyyy-MM-dd');
    this.subActivityModel.SubActivityEndDate = this.datepipe.transform(this.eventEndDateBind, 'yyyy-MM-dd');
    this.showDialog = true;
    console.log(this.subActivityModel);
  }
 
  ClearFormData():void{
   this.subActivityForm.reset();
   this.eventStartDateBind=null;
   this.eventEndDateBind=null;
  }
  
  SubActivityCancel():void{
    debugger;
    this.showDialog=!this.showDialog;
    this.cancelSubActivityCreation.emit();
    this.ClearFormData();
  }
}