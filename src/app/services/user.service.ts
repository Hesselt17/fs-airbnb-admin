import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private httpClient : HttpClient
  ) {
  }

  getAllUsers(cb: Function) {

    this.httpClient.get("http://localhost:3000/api/user")
      .subscribe(
        (response : any /*or user*/) => {
          console.log(response); //Access the express res.json({id:4, name:""...})
            //response.name;
          return cb(null,response);
        },
        (err) => {
          alert("failed to getAllUsers");
          return cb(err,null);
        }
      );
  }
}
