import { Component, OnInit,Inject } from '@angular/core';
import {AuthService} from './../../services/auth.service';
import {DashboardService} from './../../services/dashboard.service';
import { Router, ActivatedRoute } from '@angular/router';
import {MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  currentUser:any
  userType:any
  agentList:any
  quideList:any
  newRequestList:any
  acceptedList:any
  packList:any
  selectedPack:any

  constructor(private authService:AuthService,private dashBoardService:DashboardService,private router:Router,public dialog: MatDialog) { 
    this.authService.currentUser.subscribe(x=>this.currentUser=x)
    this.authService.currentUserType.subscribe(x=>this.userType=x)
    this.getAllTravelAgent()
    this.getAllQuide()
    this.getAllNewPackageRequest()
    this.getAcceptedPackage()
    this.dashBoardService.getAllPackage()
    .subscribe((data)=>{
      this.packList=data;
    })
  }

  ngOnInit(): void {
  }
  getAllTravelAgent(){
    this.dashBoardService.getAllTravelAgent()
    .subscribe((data)=>{
      this.agentList=data;
    })
  }
  getAllQuide(){
    this.dashBoardService.getAllQuide()
    .subscribe((data)=>{
      this.quideList=data;
    })
  }
  getAllNewPackageRequest(){
    this.dashBoardService.getAllNewPackageRequest()
    .subscribe((data)=>{
      this.newRequestList=data;
    })
  }
  acceptPackage(packId){
    this.dashBoardService.acceptPackage(packId)
    .subscribe((data)=>{
      location.reload();
    })
  }
  getAcceptedPackage(){
    this.dashBoardService.getAllAcceptedPackage()
    .subscribe((data)=>{
      this.acceptedList=data
    })
  }
  navigateToUpdate(pack){
    this.selectedPack=pack
    this.router.navigate(["/updatePack"])
  }
  update(pack) {
    
    const dialogRef = this.dialog.open(UpdatePackage,{data:pack});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


}
@Component({
  selector: 'update-package',
  templateUrl: 'update-package.html',
})
export class UpdatePackage {
  constructor(public dialogRef: MatDialogRef<UpdatePackage>,@Inject(MAT_DIALOG_DATA) public data: any){}
}
