import { Component, ViewChild, OnInit } from '@angular/core';
import { ProjectResourceIndividualAllocation } from './project.resource.individual.allocation';
import { ResourceModel } from '../../../../Models/ResourceModel';
import { ResourceProjectAllocationDetailModel } from '../../../../Models/ResourceProjectAllocationDetailModel';
import { SearchCriteriaType } from '../../../../../enums/SearchCriteriaType';
import { tempModelResourceAllocationCheck } from './tempModelResourceAllocationCheck';
@Component({
    selector: 'project-resource-allocation',
    templateUrl: './project.resource.allocation.html',
    styleUrls: ['project.resource.css']
})
export class ProjectResourceAllocationComponent {
    constructor() { }


    isCriteriaNotSelected: boolean = true;
    selectedCriteriaValue: string;
    resourceModelDataFiltered: ResourceModel[];
    isCurrentResourceAllocatedList: tempModelResourceAllocationCheck[] = [];
    enteredResourceData: string;
    testIt: string;
    reflectChange: string;
    resourceProjectAllocationDetailModelList: ResourceProjectAllocationDetailModel[] = [];
    update_expression: string = "(Updating)";
    Isupdate_expression:boolean=false;

    @ViewChild(ProjectResourceIndividualAllocation) private timerComponent: ProjectResourceIndividualAllocation;

    SearchCriteria = [
        { enumvalue: SearchCriteriaType.firstName, viewValue: 'FirstName' },
        { enumvalue: SearchCriteriaType.lastName, viewValue: 'LastName' },
        { enumvalue: SearchCriteriaType.resourceId, viewValue: 'ResourceId' },
        { enumvalue: SearchCriteriaType.email, viewValue: 'Email' }
    ];
    resourceModelData = [
        new ResourceModel("1", 'Akshay', 'Sha', 'akasasasasasasasasasaaaaaaaaaaaaadd@gmail.com'),
        new ResourceModel("2", 'Bkshay', 'Sha', 'akasasasasasasasasasaaaaaaaaaaaaadd@gmail.com'),
        new ResourceModel("3", 'Ckshay', 'Sha', 'akasasasasasasasasasaaaaaaaaaaaaadd@gmail.com'),
        new ResourceModel("4", 'Ckshay', 'Sha', 'bkasasasasasasasasasaaaaaaaaaaaaadd@gmail.com'),
        new ResourceModel("5", 'Dkshay', 'Sha', 'akasasasasasasasasasaaaaaaaaaaaaadd@gmail.com'),
        new ResourceModel("6", 'Dkshay', 'Sha', 'akasasasasasasasasasaaaaaaaaaaaaadd@gmail.com'),
        new ResourceModel("7", 'Dkshay', 'Sha', 'ckasasasasasasasasasaaaaaaaaaaaaadd@gmail.com'),
        new ResourceModel("8", 'Ekshay', 'Sha', 'akasasasasasasasasasaaaaaaaaaaaaadd@gmail.com'),
        new ResourceModel("9", 'Fkshay', 'Sha', 'akasasasasasasasasasaaaaaaaaaaaaadd@gmail.com'),
        new ResourceModel("10", 'Fkshay', 'Sha', 'akasasasasasasasasasaaaaaaaaaaaaadd@gmail.com'),
        new ResourceModel("37", 'nikhil', 'rma', 'aksds@gmail.com'),
        new ResourceModel("19", 'akshas', 'Sarma', 'dssak@gmail.com'),
        new ResourceModel("11", 'dude', 'harma', 'asdk@gmail.com')

    ];

    onChange(newValue): void {
        if (newValue == this.selectedCriteriaValue) {
            this.isCriteriaNotSelected = false;
            this.enteredResourceData = null;
            this.resourceModelDataFiltered = null;
            console.log(newValue);
        }

    }


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
        this.reflectChange = this.makeid();
    }


    reflectChangeInputPropParent() {
        //this.reflectChange=this.makeid();
    }


    makeid() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < 5; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }

    selectAllFilteresResources(num): void {
        if (num == 1) {
            this.testIt = "1";
            this.reflectChange = this.makeid();
        }
    }

    UnSelectAllFilteresResources(num): void {
        if (num == 1) {
            this.testIt = "2";
            this.resourceProjectAllocationDetailModelList.length = 0;
            this.isCurrentResourceAllocatedList.length = 0;
            this.reflectChange = this.makeid();
            console.log(this.resourceProjectAllocationDetailModelList);
        }
    }




    resourceProjectModelVariable(model: ResourceProjectAllocationDetailModel): void {
        debugger;
        this.isCurrentResourceAllocatedList.length = 0;
        if (this.resourceProjectAllocationDetailModelList.filter(a => a.ResourceId == model.ResourceId).length == 0) {
            this.resourceProjectAllocationDetailModelList.push(model);
        }
        else if (this.resourceProjectAllocationDetailModelList != null &&
            this.resourceProjectAllocationDetailModelList.filter(a => a.ResourceId == model.ResourceId).length != 0) {
            let indexModel = this.resourceProjectAllocationDetailModelList.filter(a => a.ResourceId == model.ResourceId)[0];
            var index = this.resourceProjectAllocationDetailModelList.indexOf(indexModel);

            if (index !== -1) {
                this.resourceProjectAllocationDetailModelList[index] = model;
                setTimeout(() => {
                    this.Isupdate_expression = false;
                }, 2500);
                this.Isupdate_expression = true;
            }
        }
        console.log(this.resourceProjectAllocationDetailModelList);
        this.resourceProjectAllocationDetailModelList.forEach(a => {
            let tempmodel = new tempModelResourceAllocationCheck();
            tempmodel.resId = a.ResourceId,
                tempmodel.isAllocatedVal = a.IsAllocation
            this.isCurrentResourceAllocatedList.push(tempmodel);
        });
    }

    ClearResourceProjectAllocation(e): void {
        let indexModel = this.resourceProjectAllocationDetailModelList.filter(a => a.ResourceId == e)[0];
        var index = this.resourceProjectAllocationDetailModelList.indexOf(indexModel);

        if (index !== -1) {
            this.resourceProjectAllocationDetailModelList.splice(index, 1);
        }

        let indexModel1 = this.isCurrentResourceAllocatedList.filter(a => a.resId == e)[0];
        index = this.isCurrentResourceAllocatedList.indexOf(indexModel1);

        if (index !== -1) {
            this.isCurrentResourceAllocatedList.splice(index, 1);
        }
    }

    resourceName(Id): string {
        let resource = this.resourceModelData.filter(a => a.ResourceId == Id)[0];
        return resource.FirsName + ' ' + resource.LastName;
    }
}
