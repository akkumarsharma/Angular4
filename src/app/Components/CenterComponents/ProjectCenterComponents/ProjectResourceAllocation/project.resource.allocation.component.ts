import { Component, ViewChild } from '@angular/core';
import { ProjectResourceIndividualAllocation } from './project.resource.individual.allocation';
import { ResourceModel } from '../../../../Models/ResourceModel';
import { ResourceProjectAllocationDetailModel } from '../../../../Models/ResourceProjectAllocationDetailModel';
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
        new ResourceModel("1", 'Akshay', 'Sha', 'akasasasasasasasasasaaaaaaaaaaaaadd@gmail.com', false),
        new ResourceModel("2", 'Bkshay', 'Sha', 'akasasasasasasasasasaaaaaaaaaaaaadd@gmail.com', false),
        new ResourceModel("3", 'Ckshay', 'Sha', 'akasasasasasasasasasaaaaaaaaaaaaadd@gmail.com', false),
        new ResourceModel("4", 'Ckshay', 'Sha', 'bkasasasasasasasasasaaaaaaaaaaaaadd@gmail.com', false),
        new ResourceModel("5", 'Dkshay', 'Sha', 'akasasasasasasasasasaaaaaaaaaaaaadd@gmail.com', false),
        new ResourceModel("6", 'Dkshay', 'Sha', 'akasasasasasasasasasaaaaaaaaaaaaadd@gmail.com', false),
        new ResourceModel("7", 'Dkshay', 'Sha', 'ckasasasasasasasasasaaaaaaaaaaaaadd@gmail.com', false),
        new ResourceModel("8", 'Ekshay', 'Sha', 'akasasasasasasasasasaaaaaaaaaaaaadd@gmail.com', false),
        new ResourceModel("9", 'Fkshay', 'Sha', 'akasasasasasasasasasaaaaaaaaaaaaadd@gmail.com', false),
        new ResourceModel("10", 'Fkshay', 'Sha', 'akasasasasasasasasasaaaaaaaaaaaaadd@gmail.com', false),
        new ResourceModel("37", 'nikhil', 'rma', 'aksds@gmail.com', false),
        new ResourceModel("9", 'akshas', 'Sarma', 'dssak@gmail.com', false),
        new ResourceModel("11", 'dude', 'harma', 'asdk@gmail.com', false)

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
        else {
            this.resourceModelDataFiltered = null;
        }


    }

    testIt: boolean;
    @ViewChild(ProjectResourceIndividualAllocation)
    private timerComponent: ProjectResourceIndividualAllocation;


    selectAllFilteresResources(): void {
        this.resourceModelDataFiltered.forEach(a => a.IsAllocationTemp = true);
        this.testIt = !this.testIt;
    }

    UnSelectAllFilteresResources(): void {
        this.resourceModelDataFiltered.forEach(a => a.IsAllocationTemp = false);
        this.testIt = !this.testIt;
        this.resourceProjectAllocationDetailModelList.length = 0;
        console.log(this.resourceProjectAllocationDetailModelList);
    }

    SubmitResourceRecord(): void {

    } 

    resourceProjectAllocationDetailModelList: ResourceProjectAllocationDetailModel[] = [];

    resourceProjectModelVariable(model: ResourceProjectAllocationDetailModel): void {
        if (this.resourceProjectAllocationDetailModelList.filter(a => a.ResourceId == model.ResourceId).length == 0) {
            this.resourceProjectAllocationDetailModelList.push(model);
        }
        else if (this.resourceProjectAllocationDetailModelList != null &&
            this.resourceProjectAllocationDetailModelList.filter(a => a.ResourceId == model.ResourceId).length != 0) {
            let indexModel = this.resourceProjectAllocationDetailModelList.filter(a => a.ResourceId == model.ResourceId)[0];
            var index = this.resourceProjectAllocationDetailModelList.indexOf(indexModel);

            if (index !== -1) {
                this.resourceProjectAllocationDetailModelList[index] = model;
            }
        }
        console.log(this.resourceProjectAllocationDetailModelList);
    }

    ClearResourceProjectAllocation(e): void {
        let indexModel = this.resourceProjectAllocationDetailModelList.filter(a => a.ResourceId == e)[0];
        var index = this.resourceProjectAllocationDetailModelList.indexOf(indexModel);

        if (index !== -1) {
            this.resourceProjectAllocationDetailModelList.splice(index, 1);
        }
        console.log(this.resourceProjectAllocationDetailModelList);
    }
}