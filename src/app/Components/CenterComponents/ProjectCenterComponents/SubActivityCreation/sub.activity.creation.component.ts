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
    // styleUrls: ['sub.activity.css'],
    animations: [
        trigger('AnimateGrid', [
            state('removeForm', style({
                // width: '100%',
                transform: 'translateX(0%)'
                //display:'block'
            })),
            state('addForm', style({
                // width: '30%',
                transform: 'translateX(+5%)'
                //display:'none'
            })),
            transition('addForm => removeForm', animate('100ms ease-out')),
            // transition('addForm => removeForm', [
            //     animate(900, keyframes([
            //          style({ transform: 'translateX(-10%)' }),
            //         style({transform: 'Scale(0.2)'}),
            //         style({ transform: ' Scale(1)' })
            //     ]))
            // ]),
            //  transition('removeForm => addForm', [
            //     animate(900, keyframes([
                  
            //          style({ transform: 'translateX(+10%) ' }),
            //         style({transform: 'Scale(0.2)'  }),
            //         style({ transform: 'Scale(1)' })
            //     ]))
            // ])
             transition('removeForm => addForm', animate('100ms ease-in'))
        ])]
})
export class SubActivityCreationComponent {
    switchForm = false;
    isShowSubActivityForm = false;
    title__add_cancel_activity = "+Add New"
    get stateName() {
        return this.switchForm ? 'addForm' : 'removeForm'

    }
    AddNewActivity(): void {
        this.switchForm = !this.switchForm;
    }

    classesToApply: string;
    AnimationEnd(): void {
        this.switchForm ? this.isShowSubActivityForm = true : this.isShowSubActivityForm = false
        this.switchForm ? this.title__add_cancel_activity = "-Cancel Add" : this.title__add_cancel_activity = "+Add New"
        this.classesToApply = this.switchForm ? "col-lg-4 col-md-4 col-sm-4 col-xs-12" : "col-lg-10 col-md-10 col-sm-10 col-xs-12";
    }

    cancelSubActivityCreation():void{
     this.switchForm = !this.switchForm;
     this.AnimationEnd();
    }

}