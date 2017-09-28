import { Component,Output,EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormControl } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SubActivityModel } from '../../../../Models/SubActivityModel';
@Component({
  selector: 'sub-activity-form',
  templateUrl: './sub.activity.form.component.html',
})
export class SubActivityFormComponent{
  @Output() cancelSubActivityCreation = new EventEmitter();
  @Output() subActivityModelToAdd = new EventEmitter<SubActivityModel>();
  constructor(private fb: FormBuilder, public datepipe: DatePipe) { }
  subActivityForm: FormGroup;
  eventEndDateControl: FormControl;
  state: string;
  ngOnInit(): void {
    this.subActivityForm = this.fb.group({
      EventNameControl: ['', Validators.required],
      EventDescControl: ['', Validators.required],
      eventStartDateControl:[null,Validators.required],
      eventEndDateControl:[null,Validators.required]
    });
}


  showDialog = false;
  subActivityModel: SubActivityModel;
  onSubmit(formData: any) {
    debugger;
    this.subActivityModel = new SubActivityModel();
    this.subActivityModel.SubActivityName = formData._value.EventNameControl;
    this.subActivityModel.SubActivityDesc = formData._value.EventDescControl;
    this.subActivityModel.SelectedMainActivity = this.state;
    this.subActivityModel.SubActivityStartDate = this.datepipe.transform(formData._value.eventStartDateControl, 'yyyy-MM-dd');
    this.subActivityModel.SubActivityEndDate = this.datepipe.transform(formData._value.eventEndDateControl, 'yyyy-MM-dd');
    this.showDialog = true;
    console.log(this.subActivityModel);
  }
 
  ClearFormData():void{
   this.subActivityForm.reset();
  }
  
  SubActivityCancel():void{
    this.showDialog=!this.showDialog;
    this.cancelSubActivityCreation.emit();
    // this.ClearFormData();
  }
  SubActivityContinue():void{
    this.showDialog=!this.showDialog;
    this.cancelSubActivityCreation.emit();
    debugger;
    this.subActivityModelToAdd.emit(this.subActivityModel);
  }

  // customErrorStateMatcher(c: FormControl): boolean {
  //    const hasInteraction = c.dirty || c.touched;
  //   const isInvalid = c.invalid;

  //   return !!(hasInteraction && isInvalid);
  // }
}