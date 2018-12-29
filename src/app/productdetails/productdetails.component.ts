import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';//to get data from the route


@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  productDetail: any;
  

  constructor(public activateRoute: ActivatedRoute) {
    // this.subUser = this.activateRoute.snapshot.params['prod']
    //   console.log('user', this.subUser);
    this.productDetail = JSON.parse(this.activateRoute.snapshot.params['product'])
    console.log('user', this.productDetail);

  }

  ngOnInit() {
  }
addtocart(id) {
console.log(id)
//put service
}
}
