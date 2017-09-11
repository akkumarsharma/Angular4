import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { FormControl } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewProjectEventModel } from '../../../Models/NewProjectEventModel';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'project-event-new',
  templateUrl: './project.event.new.component.html'
})
export class ProjectEventNewComponent implements OnInit {
  constructor(private fb: FormBuilder, public datepipe: DatePipe) {
    this.stateCtrl = new FormControl('', [
      Validators.required])
    this.filteredStates = this.stateCtrl.valueChanges
      .startWith(null)
      .map(name => this.filterStates(name));

  }
  projectEventNewFrm: FormGroup;
  eventStartDateControl: FormControl;
  eventEndDateControl: FormControl;
  newProjectEventModel: NewProjectEventModel;
  eventStartDateBind: string;
  eventEndDateBind: string;
  state: string;
  ngOnInit(): void {
    this.projectEventNewFrm = this.fb.group({
      EventNameControl: ['', Validators.required],
      EventDescControl: ['', Validators.required]
      // ProjectStartDate:[null,Validators.required]

    });
    this.eventStartDateControl = new FormControl(null, [
      Validators.required])
    this.eventEndDateControl = new FormControl(null, [
      Validators.required])
  }

  onSubmit(formData: any) {
    this.newProjectEventModel = new NewProjectEventModel();
    debugger;
    this.newProjectEventModel.EventName = formData._value.EventNameControl;
    this.newProjectEventModel.EventDesc = formData._value.EventDescControl;
    this.newProjectEventModel.SelectedProject = this.state;
    this.newProjectEventModel.EventStartDate = this.datepipe.transform(this.eventStartDateBind, 'yyyy-MM-dd');
    this.newProjectEventModel.EventEndDate = this.datepipe.transform(this.eventEndDateBind, 'yyyy-MM-dd');
    console.log(this.newProjectEventModel);
  }

  stateCtrl: FormControl;
  filteredStates: any;
  states = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming',
  ];

  filterStates(val: string) {
    return val ? this.states.filter(s => s.toLowerCase().indexOf(val.toLowerCase()) === 0)
      : this.states;
  }

}