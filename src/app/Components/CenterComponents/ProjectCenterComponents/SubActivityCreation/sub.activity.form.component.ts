import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormControl } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'sub-activity-form',
  templateUrl: './sub.activity.form.component.html'
})
export class SubActivityFormComponent{
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
}