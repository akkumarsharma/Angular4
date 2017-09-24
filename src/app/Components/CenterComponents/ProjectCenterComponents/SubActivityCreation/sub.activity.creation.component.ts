import { Component } from '@angular/core';
import {
    trigger,
    state,
    style,
    animate,
    transition,
    keyframes,
    query,
    stagger
} from '@angular/animations';
import { DatePipe } from '@angular/common';
import { FormControl } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
    selector: 'sub-activity-creation',
    templateUrl: './sub.activity.creation.component.html',
    styleUrls: ['sub.activity.css'],
    animations: [
        trigger('AnimateGrid', [
            state('removeForm', style({
                width: '100%',
                transform: 'translateX(0%)'
                //display:'block'
            })),
            state('addForm', style({
                width: '30%',
                transform: 'translateX(+200%)'
                //display:'none'
            })),
            transition('addForm => removeForm', animate('1000ms ease-out')),
            transition('removeForm => addForm', animate('1000ms ease-in'))
        ])]
})
export class SubActivityCreationComponent {
    switchForm = false;
    isShowSubActivityForm = false;
    
    get stateName() {
        return this.switchForm ? 'addForm' : 'removeForm'
    }
    AddNewActivity(): void {
        this.switchForm = !this.switchForm;
    }

    AnimationEnd(): void {
        this.switchForm?this.isShowSubActivityForm = true:this.isShowSubActivityForm = false
    }
}