import { Component } from '@angular/core';

@Component({
    selector: 'project-resource-allocation',
    templateUrl: './project.resource.allocation.html'
})
export class ProjectResourceAllocationComponent {
    constructor() { }
    isCriteriaNotSelected :boolean=true;
    selectedCriteriaValue: string;
    SearchCriteria = [
        { value: '1', viewValue: 'FirstName' },
        { value: '2', viewValue: 'LastName' },
        { value: '3', viewValue: 'EmpId' }
    ];

    onChange(newValue): void {
        if (newValue == this.selectedCriteriaValue) {
            this.isCriteriaNotSelected=false;
            console.log(newValue);

        }

    }
}