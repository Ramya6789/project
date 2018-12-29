import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
// import { Observable, of, Subject } from 'rxjs';
// import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class MainService {
  url:any= "http://localhost:5000"
  constructor(private http:HttpClient) { }
//signup component ts
  signupDetails(details){
    console.log(details);
   return this.http.post(this.url + '/signup/postdetails',details);
   
  }

//login component ts
loginDetails(loginDetails){
  
console.log(loginDetails);
return this.http.post(this.url + '/login/authenticate',loginDetails);
}

//product-list component ts
getAllProducts(){
    return this.http.get(this.url + '/productdetails/getproductdetails');
}
//home component ts
getCategoryDetails(){
  return this.http.get(this.url + '/categorydetails/getcategorydetails');
}

getHomePageImageDetails(){
  return this.http.get(this.url + '/homepageimagedetails/gethomepageimagedetails');
}
// getproductdetailsbyid(productid){
//   return  this.http.get(this.url + '/productdetails/getproductdetailsbyid' + productid);
// }

// addtocart(userId,productid){
//   console.log(userId,productid)
//   return this.http.put(this.url + '/updatedetails'+userId,productid);
// }

// getuserdetailsbyid(id){
//   return this.http.get(this.url + '/getdetailsbyid' + id);
// }


}