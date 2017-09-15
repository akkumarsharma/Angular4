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
@Component({
    selector: 'project-resource-individual-allocation',
    templateUrl: './project.resource.individual.allocation.html',
    styleUrls: ['project.resource.css'],
})
export class ProjectResourceIndividualAllocation {
    @Input('resourceDetail') resourceDetail: ResourceModel;
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
    onIsAllocateResource(e, resourceDetail: ResourceModel) {
        if (e.target.checked) {
            this.isResourceAllocated = true;
        }
        else {
            this.isResourceAllocated = false;
        }
    }
}