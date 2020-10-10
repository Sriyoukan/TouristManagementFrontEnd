import { Component, OnInit,Inject } from '@angular/core';
import {AuthService} from './../../services/auth.service';
import {DashboardService} from './../../services/dashboard.service';
import { Router, ActivatedRoute } from '@angular/router';
import {MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {AlertService} from './../../services/alert.service'


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

  constructor(private authService:AuthService,private dashBoardService:DashboardService,private router:Router,public dialog: MatDialog,private alertService:AlertService) { 
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
      this.alertService.success("Accepted Successfully")
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

  deletePackage(packId){
    this.dashBoardService.deletePackage(packId)
    .subscribe((data)=>{
      location.reload()
      this.alertService.success("Successfully Deleted")
    },(err)=>{this.alertService.error("Some error occured")})
  }


}
@Component({
  selector: 'update-package',
  templateUrl: 'update-package.html',
  
})
export class UpdatePackage implements OnInit{
  updateForm:FormGroup
  selectable = true;
  removable = true;
  placesToVisitArray= new Array<String>()
  hotelsAvailableArray=new Array<String>()
  constructor(public dialogRef: MatDialogRef<UpdatePackage>,@Inject(MAT_DIALOG_DATA) public data: any,private formBuilder:FormBuilder,private dashBoardService:DashboardService,private alertService:AlertService){
    
    this.placesToVisitArray=this.data.placesToVisit
    this.hotelsAvailableArray=this.data.hotelsAvailable
  }
  ngOnInit(): void {
    this.updateForm = this.formBuilder.group({
      name:[this.data.name,Validators.required],
      placesToVisit:[null],
      district:[this.data.district,Validators.required],
      providerEmail:[this.data.providerEmail,Validators.required],
      hotelsAvailable:[null],
      transportationMethod:[this.data.transportationMethod,Validators.required]
    })
    
  }
  get f(){ return this.updateForm.controls}

  onSubmit(){
    if (this.updateForm.invalid) {
      return;
    }

    this.dashBoardService.updatePackage(this.data.id,this.f.name.value,this.placesToVisitArray,this.f.district.value,this.f.providerEmail.value,this.hotelsAvailableArray,this.f.transportationMethod.value)
    .subscribe(data=>{ 
      
      this.alertService.success("Successfully Updated")
      location.reload();
      
    })

    
}
addPlaceArray(){
  this.placesToVisitArray.push(this.f.placesToVisit.value)
  this.f.placesToVisit.setValue(null)
  return false
}
addHotelArray(){
  this.hotelsAvailableArray.push(this.f.hotelsAvailable.value)
  this.f.hotelsAvailable.setValue(null)
  return false

}
removePlace(place){
 let index=this.placesToVisitArray.indexOf(place)
 this.placesToVisitArray.splice(index,1)
}
removeHotel(hotel){
  let index=this.hotelsAvailableArray.indexOf(hotel)
  this.hotelsAvailableArray.splice(index,1)
 }
}
