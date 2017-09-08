import { Component,OnInit,ViewEncapsulation } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'project-new',
  templateUrl: './project.new.component.html'
  // styles: [`
  //   .mat-form-field-underline
  //   {
  //       background: white;
  //   }
  //   .mat-icon {
  //     margin-bottom:50px;
  //   }
  //   .mat-form-field-wrapper{
  //   padding-bottom: 0;
  // }
  // .mat-input-ripple   {
  //       background: white;
  //   }
  //   .mat-form-field-ripple {
  //       background: white;
  //   }
  // `],
  // encapsulation: ViewEncapsulation.None,
})

export class ProjectNewComponent implements OnInit{
  projectNewFrm: FormGroup;
  constructor(private fb: FormBuilder) { }
  value1:Date =new Date();
ngOnInit(): void {       
        this.projectNewFrm = this.fb.group({
            ProjectName: ['', Validators.required],
            ProjectDesc: ['', Validators.required],
            
      
        });
     
    }
}
