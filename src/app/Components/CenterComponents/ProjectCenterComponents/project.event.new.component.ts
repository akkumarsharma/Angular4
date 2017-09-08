import { Component,OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { FormControl } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'project-event-new',
  templateUrl: './project.event.new.component.html'
})
export class ProjectEventNewComponent{
    constructor() {
    this.stateCtrl = new FormControl();
    this.filteredStates = this.stateCtrl.valueChanges
      .startWith(null)
      .map(name => this.filterStates(name));
  
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