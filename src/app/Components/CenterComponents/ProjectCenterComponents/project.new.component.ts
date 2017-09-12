import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { NewProjectDetailModel } from '../../../Models/NewProjectDetailModel';
import { DatePipe } from '@angular/common';
import { serviceForRoute } from '../../../Services/SharedServices.service'
import { CenterComm } from '../../../CommonClasses/centerComm'
import { CenterIdentifier } from '../../../../enums/center.identifier'
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
  newProjectDetailModel: NewProjectDetailModel;
  projectStartDateBind: string;
  projectEndDateBind: string;


  //start dialog
  showDialog = false;
  //end dialog
  constructor(private fb: FormBuilder, public datepipe: DatePipe, private sharedService: serviceForRoute) { }
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

  onSubmit(formData: any) {
    this.newProjectDetailModel = new NewProjectDetailModel();
    this.newProjectDetailModel.projectName = formData._value.ProjectName;
    this.newProjectDetailModel.projectDesc = formData._value.ProjectDesc;
    this.newProjectDetailModel.projectStartDate = this.datepipe.transform(this.projectStartDateBind, 'yyyy-MM-dd');
    this.newProjectDetailModel.projectEndDate = this.datepipe.transform(this.projectEndDateBind, 'yyyy-MM-dd');
    this.showDialog = true;
    console.log(this.newProjectDetailModel);
  }

  centerCommObj: CenterComm;
  NewProjectResorceAllocation() {
    this.showDialog = false;
    this.centerCommObj = new CenterComm;
    this.centerCommObj.CommType = CenterIdentifier.newProjectResourceCreation;
    this.centerCommObj.Id = null;//projectId will go here
    this.sharedService.sendMessage(this.centerCommObj);
  }




}
