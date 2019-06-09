import { Component, OnInit } from '@angular/core';
import { PropertyService } from 'src/app/services/property.service';
import { Property } from 'src/app/models/property';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  properties: Array<Property> = [];

  constructor(
    private propService: PropertyService
  ) { 
    const listingCallback = (err, props) => {
      if (err) {
        alert(err.error.message);
        return;
      }
      console.log(props);
      this.properties = props;
    };

    this.propService.getAllProperties(listingCallback);
    console.log(this.properties);
  }

  ngOnInit() {
  }


}
