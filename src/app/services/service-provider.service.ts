import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceProviderService {


  constructor(
    private httpClient : HttpClient
  ) {

  }

  getAllBookings(cb: Function) {

    this.httpClient.get("http://localhost:3000/api/bookings")
      .subscribe(
        (response : any /*or user*/) => {
          console.log(response); //Access the express res.json({id:4, name:""...})
            //response.name;
          return cb(null,response);
        },
        (err) => {
          alert("failed to getAllBookings");
          return cb(err,null);
        }
      );
  }

}
