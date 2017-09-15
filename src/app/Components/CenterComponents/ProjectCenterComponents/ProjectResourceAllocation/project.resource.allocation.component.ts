import { Component } from '@angular/core';
import { ResourceModel } from '../../../../Models/ResourceModel';
import { SearchCriteriaType } from '../../../../../enums/SearchCriteriaType';
@Component({
    selector: 'project-resource-allocation',
    templateUrl: './project.resource.allocation.html',
     styleUrls: ['project.resource.css']
})
export class ProjectResourceAllocationComponent {
    constructor() { }
    isCriteriaNotSelected: boolean = true;
    selectedCriteriaValue: string;
    SearchCriteria = [
        { enumvalue: SearchCriteriaType.firstName, viewValue: 'FirstName' },
        { enumvalue: SearchCriteriaType.lastName, viewValue: 'LastName' },
        { enumvalue: SearchCriteriaType.resourceId, viewValue: 'ResourceId' },
        { enumvalue: SearchCriteriaType.email, viewValue: 'Email' }
    ];
    resourceModelData = [
        new ResourceModel("1", 'Akshay', 'Sha', 'akasasasasasasasasasaaaaaaaaaaaaadd@gmail.com'),
        new ResourceModel("3", 'nikhil', 'rma', 'aksds@gmail.com'),
        new ResourceModel("9", 'akshas', 'Sarma', 'dssak@gmail.com'),
        new ResourceModel("11", 'dude', 'harma', 'asdk@gmail.com')
        
    ];
    resourceModelDataFiltered: ResourceModel[];

    onChange(newValue): void {
        if (newValue == this.selectedCriteriaValue) {
            this.isCriteriaNotSelected = false;
            this.enteredResourceData = null;
            this.resourceModelDataFiltered = null;
            console.log(newValue);
        }

    }

    enteredResourceData: string
    enumTypeCriteria(): SearchCriteriaType {
        return this.SearchCriteria.filter(s => s.viewValue == this.selectedCriteriaValue)[0].enumvalue;
    }

    filterResources() {
        if (this.enteredResourceData != null && this.enteredResourceData != "") {
            switch (this.enumTypeCriteria()) {
                case SearchCriteriaType.firstName:
                    this.resourceModelDataFiltered = this.enteredResourceData ? this.resourceModelData.filter(s => s.FirsName.toLowerCase().indexOf(this.enteredResourceData.toLowerCase()) === 0)
                        : null;
                    break;
                case SearchCriteriaType.lastName:
                    this.resourceModelDataFiltered = this.enteredResourceData ? this.resourceModelData.filter(s => s.LastName.toLowerCase().indexOf(this.enteredResourceData.toLowerCase()) === 0)
                        : null;
                    break;
                case SearchCriteriaType.email:
                    this.resourceModelDataFiltered = this.enteredResourceData ? this.resourceModelData.filter(s => s.Email.toLowerCase().indexOf(this.enteredResourceData.toLowerCase()) === 0)
                        : null;
                    break;
                case SearchCriteriaType.resourceId:
                    this.resourceModelDataFiltered = this.enteredResourceData ? this.resourceModelData.filter(s => s.ResourceId.toLowerCase().indexOf(this.enteredResourceData.toLowerCase()) === 0)
                        : null;
                    break;
                default:

            }
        }
        else
        {
            this.resourceModelDataFiltered=null;
        }


    }


}