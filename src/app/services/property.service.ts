import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor(
    private httpClient : HttpClient
  ) { }

  getAllProperties(cb: Function) {

    this.httpClient.get("http://localhost:3000/api/property")
      .subscribe(
        (response : any /*or user*/) => {
          console.log(response); //Access the express res.json({id:4, name:""...})
            //response.name;
          return cb(null,response);
        },
        (err) => {
          alert("failed to getAllProperties");
          return cb(err,null);
        }
      );
  }
}
