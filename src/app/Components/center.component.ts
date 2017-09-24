import { Component, OnDestroy, HostListener } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { serviceForRoute } from '../Services/SharedServices.service'
import { Subscription } from 'rxjs/Subscription';
import { CenterIdentifier } from '../../enums/center.identifier'
import { CenterComm } from '../CommonClasses/centerComm';
import { Breadcrumb } from '../Components/Breadcrumb/breadcrumb';
@Component({
    selector: 'app-center',
    templateUrl: './center.component.html',
    styleUrls: ['center.component.css'],
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
    isShowProjectResourceAllocation: boolean;
    IsSubActivityCreation:boolean;
    constructor(private messageService: serviceForRoute) {
        this.subscription = this.messageService.getMessage().subscribe(message => { this.GetViewInfo(message) });
    }
    IsGotoTop: boolean = false;

    @HostListener("window:scroll", [])
    onWindowScroll() {
        const offset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (offset > 0) {
            this.IsGotoTop = true;
        }
        else {
            this.IsGotoTop = false;;
        }
    }
    GotoTop(): void {
        window.scrollTo(0, 0);
    }

    breadcrumbList: Breadcrumb[] = [];
    GetViewInfo(obj: CenterComm) {
        if (obj.CommType != undefined && obj.CommType != null) {
            this.HideAllCompBeforeLoad()
            this.breadcrumbList.length = 0
            switch (obj.CommType) {
                case CenterIdentifier.createNewProject:
                    this.screenmgs = "Create new project";
                    this.isShowProjectNew = true;
                    this.BuildBreadcrumb(CenterIdentifier.createNewProject);
                    break;
                case CenterIdentifier.createNewProjectActivity:
                    this.screenmgs = "Create new activity"
                    this.isShowProjectEventNew = true;
                    this.BuildBreadcrumb(CenterIdentifier.createNewProjectActivity);
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
                case CenterIdentifier.newProjectResourceCreation:
                    this.screenmgs = "Project Resource Allocation";
                    this.isShowProjectResourceAllocation = true;
                    this.BuildBreadcrumb(CenterIdentifier.newProjectResourceCreation);
                    break;
                case CenterIdentifier.subActivityCreation:
                    this.screenmgs = "Create sub activities";
                    this.IsSubActivityCreation = true;
                    this.BuildBreadcrumb(CenterIdentifier.subActivityCreation);
                    break;    
                default:
                    this.screenmgs = "Error"
            }
        }
    }

    BuildBreadcrumb(typeIdentifier: CenterIdentifier): void {
        switch (typeIdentifier) {
            case CenterIdentifier.createNewProject:
                this.BuildBreadcrumbMenu("Create new project", "active", 1,CenterIdentifier.createNewProject)
                this.BuildBreadcrumbMenu("Project Resource Allocation", "inactiveright", 2,CenterIdentifier.newProjectResourceCreation)
                break;
            case CenterIdentifier.newProjectResourceCreation:
                this.BuildBreadcrumbMenu("Update project details", "inactiveleft", 1,CenterIdentifier.createNewProject)
                this.BuildBreadcrumbMenu("Project Resource Allocation", "active", 2,CenterIdentifier.newProjectResourceCreation)
                break;
            case CenterIdentifier.createNewProjectActivity:
                this.BuildBreadcrumbMenu("Create new activity", "active", 1,CenterIdentifier.createNewProjectActivity)
                this.BuildBreadcrumbMenu("Create sub activities", "inactiveright", 2,CenterIdentifier.subActivityCreation)
                break;    
            case CenterIdentifier.subActivityCreation:
                this.BuildBreadcrumbMenu("Create new activity", "inactiveleft", 1,CenterIdentifier.createNewProjectActivity)
                this.BuildBreadcrumbMenu("Create sub activities", "active", 2,CenterIdentifier.subActivityCreation)
                break;    
            default:
        }
    }

    BuildBreadcrumbMenu(menuVal: string, menuclass: string, menuStep: number,centerIdentity:CenterIdentifier): void {
        let breadcrumb = new Breadcrumb();
        breadcrumb.MenuValue = menuVal;
        breadcrumb.MenuClass = menuclass;
        breadcrumb.MenuStep = menuStep;
        breadcrumb.centerIdentity=centerIdentity;
        this.breadcrumbList.push(breadcrumb);
    }

    HideAllCompBeforeLoad(): void {
        this.isShowProjectNew = false;
        this.isShowProjectEventNew = false;
        this.isShowProjectSelected = false;
        this.isShowProjectResourceAllocation = false;
        this.IsSubActivityCreation=false;
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
