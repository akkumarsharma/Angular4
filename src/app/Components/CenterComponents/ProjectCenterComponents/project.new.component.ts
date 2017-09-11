import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import {NewProjectDetailModel} from '../../../Models/NewProjectDetailModel';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'project-new',
  templateUrl: './project.new.component.html'
  // styles: [`
  //   .mat-form-field-underline
  //   {
  //       background: white;
  //   }
  //   .mat-icon {
  //     margin-bottom:50px;
  //   }
  //   .mat-form-field-wrapper{
  //   padding-bottom: 0;
  // }
  // .mat-input-ripple   {
  //       background: white;
  //   }
  //   .mat-form-field-ripple {
  //       background: white;
  //   }
  // `],
  // encapsulation: ViewEncapsulation.None,
})

export class ProjectNewComponent implements OnInit {
  projectNewFrm: FormGroup;
  projectStartDateControl: FormControl;
  projectEndDateControl: FormControl;
  newProjectDetailModel:NewProjectDetailModel;
  projectStartDateBind:string;
  projectEndDateBind:string;
  constructor(private fb: FormBuilder,public datepipe: DatePipe) { }
  ngOnInit(): void {
    this.projectNewFrm = this.fb.group({
      ProjectName: ['', Validators.required],
      ProjectDesc: ['', Validators.required],
      // ProjectStartDate:[null,Validators.required]

    });
    this.projectStartDateControl = new FormControl(null, [
      Validators.required])
    this.projectEndDateControl = new FormControl(null, [
      Validators.required])
  }

  onSubmit(formData:any){
    this.newProjectDetailModel=new NewProjectDetailModel();
    this.newProjectDetailModel.projectName=formData._value.ProjectName;
    this.newProjectDetailModel.projectDesc=formData._value.ProjectDesc;
    this.newProjectDetailModel.projectStartDate=this.datepipe.transform(this.projectStartDateBind, 'yyyy-MM-dd');
    this.newProjectDetailModel.projectEndDate=this.datepipe.transform(this.projectEndDateBind, 'yyyy-MM-dd');
    console.log(this.newProjectDetailModel);
  }

}
