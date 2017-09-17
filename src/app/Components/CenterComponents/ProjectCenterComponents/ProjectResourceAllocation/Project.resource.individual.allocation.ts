import {
    Component,
    Directive,
    Renderer,
    HostListener,
    HostBinding,
    ElementRef,
    NgModule,
    Input,
    Output,
    EventEmitter
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { ResourceModel } from '../../../../Models/ResourceModel';
import { ResourceProjectAllocationDetailModel } from '../../../../Models/ResourceProjectAllocationDetailModel';
@Component({
    selector: 'project-resource-individual-allocation',
    templateUrl: './project.resource.individual.allocation.html',
    styleUrls: ['project.resource.css'],
})
export class ProjectResourceIndividualAllocation {
    @Output() resourceProjectModelVariable = new EventEmitter<ResourceProjectAllocationDetailModel>();
    @Output() ClearResourceProjectAllocation = new EventEmitter<string>();
    @Input('resourceDetail') resourceDetail: ResourceModel;
    @Input('changeCap') changeCap: boolean;
    

    eventStartDateControl: FormControl;
    eventEndDateControl: FormControl;
    eventStartDateBind:Date=new Date("February 4, 2016 10:13:00");
    eventEndDateBind:Date=new Date("February 4, 2017 10:13:00");
    percentageAllocation:number=100;
    ngOnInit(): void {
        this.eventStartDateControl = new FormControl()
        this.eventEndDateControl = new FormControl()
    }
    constructor() { }
    stringss: string;
    isResourceAllocated = false;
    IsAllocationCheckBoxModel:boolean;
    onIsAllocateResource() {
        if (this.IsAllocationCheckBoxModel==true) {
            // console.log(this.resourceDetail.IsAllocationTemp);
            this.isResourceAllocated = true;
            this.FillResourceProjectModel();
            this.resourceProjectModelVariable.emit(this.resourceProjectModel);
        }
        else {
            this.isResourceAllocated = false;
            this.ClearResourceProjectAllocation.emit(this.resourceDetail.ResourceId);
        }
    }

      resourceProjectModel:ResourceProjectAllocationDetailModel;
      ngOnChanges() {
        if(this.resourceDetail.IsAllocationTemp==true){
           this.IsAllocationCheckBoxModel=true;
           this.isResourceAllocated = true;
           this.FillResourceProjectModel();
           this.resourceProjectModelVariable.emit(this.resourceProjectModel);

        }  
        if(this.resourceDetail.IsAllocationTemp==false){
           this.IsAllocationCheckBoxModel=false;
           this.isResourceAllocated = false;

        }  
        // console.log('onChange fired');
        // console.log('changing');
    }

    FillResourceProjectModel():void{
        let model=new ResourceProjectAllocationDetailModel();
        model.StartDate=this.eventStartDateBind;
        model.EndDate=this.eventEndDateBind;
        model.ResourceId=this.resourceDetail.ResourceId;
        model.AllocationPercentage=this.percentageAllocation;
        this.resourceProjectModel=model;
    }

}