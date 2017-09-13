import { Component } from '@angular/core';
import { ResourceModel } from '../../../../Models/ResourceModel';

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
     resourceModelData = [
    new ResourceModel(1, 'Akshay','Sha','akdd@gmail.com'),
    new ResourceModel(3, 'nikhil','rma','aksds@gmail.com'),
    new ResourceModel(9, 'akshas','Sarma','dssak@gmail.com'),
    new ResourceModel(11, 'dude','harma','asdk@gmail.com')
  ];
    onChange(newValue): void {
        if (newValue == this.selectedCriteriaValue) {
            this.isCriteriaNotSelected=false;
            console.log(newValue);

        }

    }
astatus:string
    onIsAllocateResource(e,resourceDetail:ResourceModel){
       if(e.target.checked){
         
       }
    }
}