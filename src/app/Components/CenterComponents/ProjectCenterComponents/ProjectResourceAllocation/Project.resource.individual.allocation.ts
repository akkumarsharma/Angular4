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
import { ResourceModel } from '../../../../Models/ResourceModel';
@Component({
    selector: 'project-resource-individual-allocation',
    templateUrl: './project.resource.individual.allocation.html'
})
export class ProjectResourceIndividualAllocation {
     @Input('resourceDetail') resourceDetail: ResourceModel;
    constructor() { }
}