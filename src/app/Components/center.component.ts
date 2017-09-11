import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { serviceForRoute } from '../Services/SharedServices.service'
import { Subscription } from 'rxjs/Subscription';
import { CenterIdentifier } from '../../enums/center.identifier'
import { CenterComm } from '../CommonClasses/centerComm';
@Component({
    selector: 'app-center',
    templateUrl: './center.component.html',
    //   providers:[serviceForRoute]
})
export class CenterComponent implements OnDestroy {
    num: number;
    message: string;
    subscription: Subscription;
    Id: any;
    opType: string;
    msgArray = [];
    screenmgs: string;
    isShowProjectNew: boolean;
    isShowProjectEventNew: boolean;
    isShowProjectSelected: boolean;
    constructor(private messageService: serviceForRoute) {
        this.subscription = this.messageService.getMessage().subscribe(message => { this.GetViewInfo(message) });
    }

    GetViewInfo(obj: CenterComm) {
        if (obj.CommType != undefined && obj.CommType != null) {
            this.HideAllCompBeforeLoad()
            switch (obj.CommType) {
                case CenterIdentifier.createNewProject:
                    this.screenmgs = "Create new project";
                    this.isShowProjectNew = true;
                    break;
                case CenterIdentifier.createNewProjectEvent:
                    this.screenmgs = "Create new project event"
                    this.isShowProjectEventNew = true;
                    break;
                case CenterIdentifier.selectProject:
                    this.screenmgs = "Project details"
                    this.isShowProjectSelected = true;
                    break;
                case CenterIdentifier.createNewResource:
                    this.screenmgs = "Create new resource";
                    break;
                case CenterIdentifier.createNewResourceEvent:
                    this.screenmgs = "create new resource event"
                    break;
                case CenterIdentifier.selectResource:
                    this.screenmgs = "selected resource"
                    break;
                default:
                    this.screenmgs = "Error"
            }
        }
    }
    HideAllCompBeforeLoad():void{
            this.isShowProjectNew = false;
            this.isShowProjectEventNew = false;
            this.isShowProjectSelected = false;
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
