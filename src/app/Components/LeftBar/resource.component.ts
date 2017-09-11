import { Component,ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import {ElementRef,Renderer} from '@angular/core';
import { serviceForRoute } from '../../Services/SharedServices.service'
import { CenterComm } from '../../CommonClasses/centerComm'
import { CenterIdentifier } from '../../../enums/center.identifier'
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
@Component({
  selector: 'left-bar-resource',
  templateUrl: './left.bar.resourcecomponent.html',
  styleUrls: ['./LeftBar.css']
})
export class ResourceComponent {
  stateCtrl: FormControl;
  filteredStates: any;
  fullImagePath: string;
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
//   @ViewChild("abc") el:ElementRef;

// ngAfterViewInit() {
//       let part=this.el.nativeElement.children[0].children[0].querySelector('.mat-input-underline');
//       this.renderer.setElementStyle(part, 'display', 'none');
// }

  constructor(private router: Router, private sharedService: serviceForRoute,private renderer: Renderer) {
    this.stateCtrl = new FormControl();
    this.filteredStates = this.stateCtrl.valueChanges
      .startWith(null)
      .map(name => this.filterStates(name));
    this.fullImagePath = '/assets/Images/Search_Image.jpg'
  }

  filterStates(val: string) {
    return val ? this.states.filter(s => s.toLowerCase().indexOf(val.toLowerCase()) === 0)
      : this.states;
  }
 centerCommObj: CenterComm;
  onChange(newValue): void {
    if (newValue != undefined && newValue != null) {
      this.centerCommObj = new CenterComm;
      this.centerCommObj.CommType = CenterIdentifier.selectResource;
      this.centerCommObj.Id = newValue;
      this.sharedService.sendMessage(this.centerCommObj);
    }

  }
  newResourceClick() {
    this.centerCommObj = new CenterComm;
    this.centerCommObj.CommType = CenterIdentifier.createNewResource;
    this.centerCommObj.Id = null;
    this.sharedService.sendMessage(this.centerCommObj);
  }

  newResourceEventClick() {
    this.centerCommObj = new CenterComm;
    this.centerCommObj.CommType = CenterIdentifier.createNewResourceEvent;
    this.centerCommObj.Id = null;
    this.sharedService.sendMessage(this.centerCommObj);
  }
}

