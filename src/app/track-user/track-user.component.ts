import { Component, OnInit,ViewChild  } from '@angular/core';
import { Observable } from 'rxjs';
import { interval } from 'rxjs';
import {DashboardService} from './../services/dashboard.service'



@Component({
  selector: 'app-track-user',
  templateUrl: './track-user.component.html',
  styleUrls: ['./track-user.component.css']
})
export class TrackUserComponent implements OnInit {
  
  zoom: number = 16;

  // initial center position for the map

  currentPos: point = {
    lat: 9.631237,
    lng: 79.895891
  };
  points: point[] = [];
 
  tmpPoints: point[] = [
    this.currentPos,
    {
      lat: 50.082911,
      lng: 14.431411
    },
    {
      lat: 50.083202,
      lng: 14.430994
    },
    {
      lat: 50.083352,
      lng: 14.430780
    },
    {
      lat: 50.083491,
      lng: 14.430569
    },
    {
      lat: 50.083644,
      lng: 14.430367
    }
  ]

  constructor(private dashboardService:DashboardService){


  }


  ngOnInit() {
    let i = 0;
    const obs = interval(2000)
      .subscribe(() => {
        this.dashboardService.getCordinate()
        .subscribe((data)=>{
          this.currentPos.lat=data[0].lat
          this.currentPos.lng=data[0].lon
        })
        this.points.push(this.currentPos)
      //  const pos = this.tmpPoints[i];
       // this.points.push(pos);
       // this.currentPos = pos;
        i++;
      })
  }




    
}

interface point {
  lat: number;
  lng: number;
}

